import Link from 'next/Link';

function Home() {
    return (
        <div>
            <h1>Baiano Shop</h1>

            <Link href="/produlto">
                <a>comprar rede</a>
            </Link>
        </div>
    )
}

export default Home