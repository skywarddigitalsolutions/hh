
"use client"
import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";
import Image from 'next/image'; // Importar para manejar imágenes en Next.js

export default function Nosotros() {
    return (
        <>
            <Navbar />
            <div className="relative my-12 bg-gray-100 py-12 px-4 lg:px-10">
                
                {/* Título de la sección */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl text-verde font-bold mb-4">Sobre Nosotros</h2>
                    <p className="text-lg text-gray-600">
                        Conoce más sobre nuestra misión, visión y los valores que nos definen como empresa.
                    </p>
                </div>

                {/* Contenido de la sección */}
                <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-8 lg:space-y-0">
                    
                    {/* Información */}
                    <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
                        <h3 className="text-2xl font-semibold text-verde mb-4">Nuestra Misión</h3>
                        <p className="text-gray-700 mb-4">
                            En [Nombre de la Empresa], nos dedicamos a proporcionar soluciones innovadoras y de alta calidad en [tu industria o sector]. Nuestra misión es mejorar la vida de nuestros clientes mediante la excelencia en cada servicio que ofrecemos.
                        </p>
                        <h3 className="text-2xl font-semibold text-verde mb-4">Nuestra Visión</h3>
                        <p className="text-gray-700 mb-6">
                            Aspiramos a ser líderes en nuestro campo, reconocidos por nuestro compromiso con la calidad y la innovación. Queremos ser la primera opción para quienes buscan [productos/servicios] que marquen la diferencia.
                        </p>
                        <h3 className="text-2xl font-semibold text-verde mb-4">Nuestros Valores</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            <li>Integridad: Actuamos con honestidad y transparencia.</li>
                            <li>Innovación: Buscamos constantemente nuevas y mejores formas de hacer las cosas.</li>
                            <li>Compromiso: Estamos dedicados a la satisfacción total del cliente.</li>
                            <li>Excelencia: Nos esforzamos por alcanzar los más altos estándares en todo lo que hacemos.</li>
                        </ul>
                    </div>

                    {/* Imagen */}
                    <div className="flex-1 relative w-full h-80 lg:h-[500px] rounded-lg overflow-hidden">
                        <Image
                            src="/fotoinfo.jpg" // Cambia esto por la ruta a tu imagen
                            alt="Sobre Nosotros"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
