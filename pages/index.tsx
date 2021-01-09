import { useState } from "react";
import Link from 'next/link';

export default function IndexPage() {
  return (
    <div className="text-center">
      <p>LOGO</p>

      <p>
        Choisis une des catégories ci-dessous et vois combien de questions tu
        peux répondre correctement sur un total de 10 questions
      </p>

      <p>CERCLES Vignerons / Domaines</p>

      <button className="btn-blue"><Link href="/quiz">Commencer le Quiz</Link></button>
    </div>
  );
}
