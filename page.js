export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <nav>
                    <Link href="/">Home</Link> | 
                    <Link href="/novarota">Nova Rota</Link>
                </nav>
                <main>{children}</main>
            </body>
        </html>
    );
}

export default function NovaRotaLayout({ children }) {
    return (
        <div>
            <header>
                <h1>Nova Rota</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default function NovaRotaPage() {
    return (
        <div>
            <h2>Bem-vindo à Nova Rota!</h2>
        </div>
    );
}

