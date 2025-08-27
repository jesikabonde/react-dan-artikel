import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [showMain, setShowMain] = useState(false);
  const [showArticle, setShowArticle] = useState(false);

  return (
    <div className="app-container">
      {!showMain ? (
        // Tampilan Awal
        <div className="welcome-screen">
          <h1>Selamat Datang 🚀</h1>
          <button onClick={() => setShowMain(true)}>Masuk</button>
        </div>
      ) : !showArticle ? (
        // HELLO WORLD
        <div className="main-screen">
          <div className="logo-container">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>HELLO WORLD</h1>
          <div className="card">
            <p>Selamat datang di halaman saya</p>
            <button onClick={() => setShowArticle(true)}>Lihat Artikel</button>
          </div>
        </div>
      ) : (
        // Artikel
        <div className="article-screen">
          {/* HERO */}
          <header className="hero" aria-label="Bagian atas bertema laut">
            <h1>Artikel Tentang Pemrograman</h1>
            <div className="floating-layer" aria-hidden="true">
              <div className="code-float c1">print("Hello World")</div>
              <div className="code-float c2">if (x &gt; 10) {"{ /* ... */ }"}</div>
              <div className="code-float c3">for i in range(5): pass</div>
              <div className="code-float c4">&lt;div class="card"&gt;...&lt;/div&gt;</div>
              <div className="code-float c5">console.log("JS Ready")</div>
              <div className="code-float c6">SELECT * FROM users;</div>
              <div className="code-float c7">fn main() {"{ println!(\"Hi\"); }"}</div>
            </div>
          </header>

          {/* KONTEN */}
          <main className="wrapper">
            <section>
              <h2>Ikhtisar</h2>
              <p>Halaman ini merangkum beberapa bahasa pemrograman populer beserta karakter, kelebihan, dan contoh kecilnya. Pilih bahasa sesuai tujuan: web, mobile, data, AI, atau sistem berperforma tinggi.</p>

              <article>
                <h3>Python — Ramah Pemula & Serbabisa</h3>
                <p><strong>Ringkasan:</strong> Sintaks sederhana, ekosistem library kaya (<code>NumPy</code>, <code>Pandas</code>, <code>TensorFlow</code>, <code>Django</code>). Cocok untuk data science, AI, otomatisasi, dan web.</p>
                <h4>Contoh:</h4>
                <p><code>print("Hello World")</code></p>
                <div className="note">Tips: Mulai dari dasar, lalu coba project mini seperti kalkulator atau bot sederhana.</div>

                <h3>JavaScript — Tulang Punggung Web</h3>
                <p><strong>Ringkasan:</strong> Bahasa yang berjalan di browser (frontend) dan server via Node.js (backend). Ekosistem framework kuat: React, Vue, Angular, Express.</p>
                <h4>Contoh:</h4>
                <p><code>console.log("Hello from JS!")</code></p>
                <div className="note">Tips: Kuasai DOM dan event, lalu buat interaksi kecil (toggle menu, modal, galeri).</div>

                <h3>Java — Stabil & OOP</h3>
                <p><strong>Ringkasan:</strong> Cocok untuk Android, sistem enterprise. Berbasis OOP, tooling matang.</p>
                <h4>Contoh:</h4>
                <p><code>System.out.println("Hello Java!");</code></p>

                <h3>C & C++ — Performa Tinggi</h3>
                <p><strong>Ringkasan:</strong> C cepat dan efisien, C++ menambahkan OOP. Cocok untuk embedded, game, dan aplikasi berat.</p>
                <h4>Contoh:</h4>
                <p><code>printf("Hello World");</code></p>

                <h3>PHP — Web Server-side</h3>
                <p><strong>Ringkasan:</strong> Mudah dipelajari, cocok untuk WordPress, Laravel, dan banyak situs klasik.</p>
                <h4>Contoh:</h4>
                <p><code>&lt;?php echo "Hello PHP"; ?&gt;</code></p>

                <h3>Go (Golang) — Sederhana & Cepat</h3>
                <p><strong>Ringkasan:</strong> Cocok untuk layanan skala besar, kompilasi cepat, concurrent programming.</p>
                <h4>Contoh:</h4>
                <p><code>fmt.Println("Hello, Go")</code></p>

                <h3>Kotlin — Modern untuk Android</h3>
                <p><strong>Ringkasan:</strong> Ringkas, null-safety, interoperable dengan Java. Direkomendasikan untuk Android modern.</p>
                <h4>Contoh:</h4>
                <p><code>println("Hello Kotlin")</code></p>

                <h3>Rust — Aman & Cepat</h3>
                <p><strong>Ringkasan:</strong> Memory safety tanpa garbage collector, performa tinggi, bagus untuk sistem dan CLI tools.</p>
                <h4>Contoh:</h4>
                <p><code>println!("Hello, Rust");</code></p>

                <h3>Kesimpulan</h3>
                <p>Pilih bahasa sesuai tujuanmu: Web (JS), Data/AI (Python), Android (Kotlin/Java), layanan cepat (Go), sistem berperforma tinggi (C/C++/Rust). Mulai dari satu bahasa, bangun proyek kecil, lalu tingkatkan.</p>
              </article>
            </section>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;