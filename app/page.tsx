"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("fr-FR-DeniseNeural");
  
  const voices = [
    { label: "Fille - Denise", value: "fr-FR-DeniseNeural" },
    { label: "Garçon - Henri", value: "fr-FR-HenriNeural" },
    { label: "Femme - Vivienne", value: "fr-FR-VivienneNeural" },
    { label: "Homme - Remy", value: "fr-FR-RemyNeural" }
  ];

  const speak = async () => {
    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, voice })
    });
    const blob = await res.blob();
    new Audio(URL.createObjectURL(blob)).play();
  };

  return (
    <main style={{padding:40, maxWidth:600, margin:"auto", fontFamily:"sans-serif"}}>
      <h1>Zound TTS</h1>
      <textarea 
        value={text} 
        onChange={e=>setText(e.target.value)} 
        placeholder="Tape ton texte ici..."
        rows={5} 
        style={{width:"100%", padding:10, fontSize:16}}
      />
      <select 
        value={voice} 
        onChange={e=>setVoice(e.target.value)}
        style={{width:"100%", padding:10, marginTop:10, fontSize:16}}
      >
        {voices.map(v => <option key={v.value} value={v.value}>{v.label}</option>)}
      </select>
      <button 
        onClick={speak} 
        style={{marginTop:10, padding:12, width:"100%", fontSize:16, background:"#0070f3", color:"white", border:"none", borderRadius:5}}
      >
        Écouter
      </button>
    </main>
  );
}
