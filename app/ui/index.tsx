import SpinningTitle from "@/components/spinning-title";
import Link from "next/link";

const routes = [
    {
        href: "/dynamic-imports/chart",
        title: "Dynamic Chart",
        description: "Exemplo de importação dinâmica de gráfico com code splitting"
    },
    {
        href: "/dynamic-imports/tabs",
        title: "Dynamic Tabs",
        description: "Exemplo de tabs com lazy loading de componentes"
    },
    {
        href: "/hydration/ssr",
        title: "SSR Hydration",
        description: "Estratégia de hidratação com Server-Side Rendering"
    },
    {
        href: "/hydration/suspense",
        title: "Suspense Hydration",
        description: "Estratégia de hidratação com React Suspense"
    }
];

export default function HomeUI() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
            <div className="mb-12">
                <SpinningTitle />
            </div>

            <div className="w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                    Rotas de Estudo
                </h2>
                <nav className="space-y-4">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            prefetch={true}
                            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
                        >
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                {route.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {route.description}
                            </p>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}