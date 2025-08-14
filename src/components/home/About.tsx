import vet from "@/assets/vet.png";

const About = () => {
    return (
        <section id="about" className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img
                            src={vet}
                            alt="Sobre a loja"
                            className="w-full h-auto rounded-3xl shadow-lg"
                        />
                    </div>

                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre Nós</h2>
                        <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                            Na Macedog, cada pet é tratado com cuidado e atenção, oferecendo produtos de qualidade e serviços seguros.
                            Nossa equipe dedica-se com carinho para garantir o bem-estar dos animais, respeitando suas necessidades e oferecendo orientação especializada.
                            Trabalhamos para que cada cliente sinta confiança e tranquilidade ao escolher nossos serviços, garantindo conforto e felicidade aos pets.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Nosso compromisso vai além da venda: buscamos criar laços de confiança, prezando pela segurança, higiene e dedicação em cada atendimento.
                            Na Macedog, o cuidado com os animais é nossa prioridade, sempre aliando carinho e responsabilidade em cada detalhe.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;