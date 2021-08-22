import '../index.css'

/*
        <section className="opacity-50 bg-green-500 rounded-lg shadow-2xl lg:flex p-20">
          <div className="text-lg flex flex-col justify-center">
            <span>Hello, The Coding Network is an organisation owned by 2 students in the United Kingdom</span>
          </div>
        </section>
*/

export default function About() {

  return (
    <main className="relative about-background">
      <div className="p-10 lg:pt-34 container mx-auto relative">
        <section className="opacity-75 bg-gree-500 rounded-lg shadow-2x1 lg:flex p-20">
          <div className="text-lg flex flex-col justify-center">
          <iframe title="discord server widget" id="849959313078485052" src="https://discord.com/widget?id=849959313078485052&theme=dark" width="350" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
          <div>
            <iframe title="User5029 github stats" width="400" src="https://github-readme-stats.vercel.app/api?username=User5029&count_private=true&show_icons=true&theme=radical"></iframe>
            <iframe title="MaxT-uk github stats"width="400" src="https://github-readme-stats.vercel.app/api?username=MaxT-uk&count_private=true&show_icons=true&theme=radical"></iframe>
            </div>
        </section>
      </div>
    </main>
  );
}
