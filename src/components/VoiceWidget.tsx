import { useState, useCallback, useEffect, useRef } from "react";
import { Room, RoomEvent, Track, DisconnectReason } from "livekit-client";

type CallState = "idle" | "connecting" | "connected" | "error";

const TOKEN_ENDPOINT = import.meta.env.DEV
  ? "http://localhost:8001/api/livekit-token"
  : "https://rakeezsolutions.sa/api/livekit-token";

export default function VoiceWidget() {
  const [state, setState] = useState<CallState>("idle");
  const [error, setError] = useState<string | null>(null);
  const roomRef = useRef<Room | null>(null);
  const audioElementsRef = useRef<HTMLAudioElement[]>([]);

  const cleanup = useCallback(async () => {
    audioElementsRef.current.forEach((el) => { el.pause(); el.remove(); });
    audioElementsRef.current = [];
    if (roomRef.current) {
      await roomRef.current.disconnect();
      roomRef.current = null;
    }
  }, []);

  useEffect(() => () => { cleanup(); }, [cleanup]);

  const startCall = useCallback(async () => {
    setState("connecting");
    setError(null);
    try {
      const res = await fetch(TOKEN_ENDPOINT);
      if (!res.ok) throw new Error("Token fetch failed");
      const { token, url } = await res.json();

      const room = new Room();
      roomRef.current = room;

      // Play agent audio when it arrives
      room.on(RoomEvent.TrackSubscribed, (track) => {
        if (track.kind === Track.Kind.Audio) {
          const el = track.attach();
          el.autoplay = true;
          document.body.appendChild(el);
          audioElementsRef.current.push(el);
        }
      });

      room.on(RoomEvent.TrackUnsubscribed, (track) => {
        track.detach();
      });

      room.on(RoomEvent.Disconnected, (_reason?: DisconnectReason) => {
        setState("idle");
        roomRef.current = null;
      });

      await room.connect(url, token);

      // Enable microphone so agent can hear the user
      await room.localParticipant.setMicrophoneEnabled(true);

      setState("connected");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Connection failed");
      setState("error");
      await cleanup();
    }
  }, [cleanup]);

  const endCall = useCallback(async () => {
    await cleanup();
    setState("idle");
  }, [cleanup]);

  return (
    // bottom-24 so it sits above the WhatsApp button (bottom-6)
    <div className="fixed bottom-6 right-28 z-50 flex flex-col items-center gap-3 group">
      {error && (
        <div className="absolute bottom-full mb-20 text-[10px] font-medium text-white bg-red-500 px-3 py-1 rounded-lg shadow-lg animate-bounce whitespace-nowrap">
          {error}
        </div>
      )}
      
      {state === "connected" && (
        <div className="absolute bottom-full mb-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold px-4 py-2 rounded-2xl shadow-xl border border-orange-100 animate-in fade-in slide-in-from-bottom-4 whitespace-nowrap">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          Connected to AI Agent
        </div>
      )}

      {/* Label on hover */}
      {state === "idle" && (
        <div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0">
          <div className="bg-gray-900 text-white text-[11px] px-3 py-1.5 rounded-xl shadow-2xl whitespace-nowrap font-medium">
            Call to AI Agent
          </div>
        </div>
      )}

      <button
        onClick={state === "connected" ? endCall : startCall}
        disabled={state === "connecting"}
        className={`relative flex items-center justify-center w-16 h-16 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500 transform active:scale-95
          ${state === "connected"
            ? "bg-red-500 hover:bg-red-600 rotate-[135deg]"
            : state === "connecting"
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-br from-orange-400 to-orange-600 hover:shadow-orange-500/50 hover:scale-110"
          }`}
      >
        {/* Pulsing effect for Idle state */}
        {state === "idle" && (
          <>
            <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-40"></span>
            <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-20 [animation-delay:0.5s]"></span>
            <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-10 [animation-delay:1s]"></span>
          </>
        )}

        {state === "connecting" ? (
          <span className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
        ) : state === "connected" ? (
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
