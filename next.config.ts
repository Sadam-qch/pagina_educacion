import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "serviciopagina.upea.bo",
                pathname: "/**", // Permite cualquier ruta dentro del dominio
            },
        ],
        dangerouslyAllowSVG: true,
    },

    // This should be at the top level, not inside a route config
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: "/_next/static/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "no-store, must-revalidate",
                    },
                    {
                        key: "Last-Modified",
                        value: "", // Oculta la marca de tiempo
                    },
                    {
                        key: "Content-Security-Policy",
                        value:
                            "default-src 'self'; script-src 'self' https://code.jquery.com; style-src 'self' 'unsafe-inline'; img-src 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; connect-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self';",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Pragma",
                        value: "no-cache",
                    },
                    {
                        key: "Expires",
                        value: "0",
                    },
                    {
                        key: "X-Powered-By",
                        value: "hidden", // Oculta información sobre el framework
                    },
                    {
                        key: "Content-Security-Policy",
                        value: "default-src 'self'; frame-ancestors 'none';", // Bloquea iframes
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                ],
            },
        ];
    },
};

export default nextConfig;

