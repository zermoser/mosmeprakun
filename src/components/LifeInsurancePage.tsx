import React, { useState, useEffect } from 'react';
import { Shield, Heart, Users, Phone, Mail, MapPin, Menu, X, ChevronRight, Star, Award, Clock, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    description: string;
    features: string[];
    price: string;
    popular?: boolean;
}

interface FAQ {
    question: string;
    answer: string;
}

const LifeInsurancePage: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const products: Product[] = [
        {
            id: 'comprehensive',
            name: 'ประกันชีวิตแบบครอบคลุม',
            description: 'ความคุ้มครองที่สมบูรณ์แบบสำหรับคุณและครอบครัว',
            features: [
                'ความคุ้มครองการเสียชีวิต',
                'ความคุ้มครองการทุพพลภาพ',
                'ผลประโยชน์การออม',
                'ผลประโยชน์เมื่อครบกำหนด'
            ],
            price: 'เริ่มต้น 2,500 บาท/เดือน',
            popular: true
        },
        {
            id: 'savings',
            name: 'ประกันชีวิตแบบออม',
            description: 'เก็บออมและมีความคุ้มครองในตัวเดียว',
            features: [
                'ผลตอบแทนที่น่าสนใจ',
                'ความคุ้มครองพื้นฐาน',
                'ยืดหยุ่นในการจ่ายเบี้ยประกัน',
                'สามารถขอกู้ยืมได้'
            ],
            price: 'เริ่มต้น 1,800 บาท/เดือน'
        },
        {
            id: 'term',
            name: 'ประกันชีวิตแบบเทอม',
            description: 'ความคุ้มครองสูงด้วยเบี้ยประกันที่ประหยัด',
            features: [
                'เบี้ยประกันต่ำ',
                'ความคุ้มครองสูง',
                'ระยะเวลาที่ยืดหยุ่น',
                'เหมาะสำหรับคนหนุ่มสาว'
            ],
            price: 'เริ่มต้น 800 บาท/เดือน'
        }
    ];

    const faqs: FAQ[] = [
        {
            question: 'ประกันชีวิตคืออะไร?',
            answer: 'ประกันชีวิตคือการประกันภัยที่ให้ความคุ้มครองทางการเงินแก่ผู้รับประโยชน์เมื่อผู้เอาประกันเสียชีวิต หรือเกิดเหตุการณ์ที่กำหนดไว้ในกรมธรรม์'
        },
        {
            question: 'ใครควรมีประกันชีวิต?',
            answer: 'ทุกคนควรมีประกันชีวิต โดยเฉพาะผู้ที่มีครอบครัว มีภาระหนี้สิน หรือต้องการสร้างความมั่นคงทางการเงินให้กับอนาคต'
        },
        {
            question: 'จำนวนเงินเอาประกันควรเป็นเท่าไหร่?',
            answer: 'โดยทั่วไปแนะนำให้เอาประกันในจำนวน 5-10 เท่าของรายได้ประจำปี หรือคำนวณจากความต้องการของครอบครัวและภาระหนี้สิน'
        },
        {
            question: 'สามารถเปลี่ยนแปลงกรมธรรม์ได้หรือไม่?',
            answer: 'ได้ครับ สามารถเปลี่ยนแปลงรายละเอียดกรมธรรม์ได้ตามเงื่อนไขที่กำหนด เช่น เพิ่มหรือลดจำนวนเงินเอาประกัน เปลี่ยนผู้รับประโยชน์ เป็นต้น'
        }
    ];

    const toggleFAQ = (index: number) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#3593ca] to-[#2563eb] rounded-xl flex items-center justify-center shadow-lg">
                                    <Shield className="h-7 w-7 text-white" />
                                </div>
                            </div>
                            <div className="ml-3">
                                <h1 className="text-xl font-bold bg-gradient-to-r from-[#3593ca] to-[#2563eb] bg-clip-text text-transparent">
                                    Mosmeprakun
                                </h1>
                                <p className="text-sm text-gray-600">Life Insurance</p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <a href="#products" className="text-gray-700 hover:text-[#3593ca] transition-all duration-300 font-medium">ผลิตภัณฑ์</a>
                            <a href="#about" className="text-gray-700 hover:text-[#3593ca] transition-all duration-300 font-medium">เกี่ยวกับเรา</a>
                            <a href="#questions" className="text-gray-700 hover:text-[#3593ca] transition-all duration-300 font-medium">คำถามที่พบบ่อย</a>
                            <a href="#contact" className="text-gray-700 hover:text-[#3593ca] transition-all duration-300 font-medium">ติดต่อเรา</a>
                        </nav>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 hover:text-[#3593ca] transition-colors"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-[#3593ca] hover:bg-blue-50 rounded-lg transition-all">ผลิตภัณฑ์</a>
                            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-[#3593ca] hover:bg-blue-50 rounded-lg transition-all">เกี่ยวกับเรา</a>
                            <a href="#calculator" className="block px-3 py-2 text-gray-700 hover:text-[#3593ca] hover:bg-blue-50 rounded-lg transition-all">คำนวณเบี้ยประกัน</a>
                            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-[#3593ca] hover:bg-blue-50 rounded-lg transition-all">ติดต่อเรา</a>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section with Enhanced Design */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-24 pb-20 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#3593ca] to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-400 to-transparent rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-fade-in">
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#3593ca]/20 to-blue-500/20 rounded-full text-[#3593ca] font-medium">
                                    <Sparkles className="h-4 w-4 mr-2" />
                                    ประกันชีวิตที่คุณไว้วางใจ
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                                    ปกป้องอนาคต
                                    <span className="bg-gradient-to-r from-[#3593ca] to-blue-600 bg-clip-text text-transparent">
                                        ที่คุณรัก
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    ประกันชีวิตที่ให้ความคุ้มครองครอบคลุม พร้อมผลประโยชน์ที่คุ้มค่า
                                    เพื่อความมั่นใจในทุกช่วงเวลาของชีวิต
                                </p>
                            </div>


                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://zermoser.github.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-gradient-to-r from-[#3593ca] to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                                >
                                    รับใบเสนอราคา
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <a
                                    href="https://zermoser.github.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-[#3593ca] text-[#3593ca] px-8 py-4 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-[#3593ca] hover:to-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                                >
                                    เรียนรู้เพิ่มเติม
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-8 pt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-[#3593ca] to-blue-600 bg-clip-text text-transparent">500K+</div>
                                    <div className="text-sm text-gray-600 mt-1">ลูกค้าที่ไว้วางใจ</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-[#3593ca] to-blue-600 bg-clip-text text-transparent">50+</div>
                                    <div className="text-sm text-gray-600 mt-1">ปีของประสบการณ์</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-[#3593ca] to-blue-600 bg-clip-text text-transparent">99.8%</div>
                                    <div className="text-sm text-gray-600 mt-1">ความพึงพอใจ</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative lg:animate-float">
                            <div className="relative">
                                <div className="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                                    <div className="bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-200 w-full h-96 flex items-center justify-center relative">
                                        <div className="text-center relative z-10">
                                            <div className="w-32 h-32 bg-gradient-to-br from-[#3593ca] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                                                <Users className="h-16 w-16 text-white" />
                                            </div>
                                            <p className="text-[#3593ca] font-semibold text-lg">ประกันสุขภาพ Mosmeprakun</p>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-7 w-7 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 text-lg">100% Protected</div>
                                            <div className="text-sm text-gray-600">ความคุ้มครองเต็มรูปแบบ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Features Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            ทำไมต้องเลือก
                            <span className="bg-gradient-to-r from-[#3593ca] to-blue-600 bg-clip-text text-transparent"> Mosmeprakun</span>?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            เราให้มากกว่าความคุ้มครอง เรามอบความมั่นใจและการดูแลที่ครอบคลุมทุกด้าน
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#3593ca]/30">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#3593ca] to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Shield className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">ความคุ้มครองครอบคลุม</h3>
                            <p className="text-gray-600 leading-relaxed">
                                ความคุ้มครองที่ครอบคลุมทุกสถานการณ์ ตั้งแต่การเสียชีวิต อุบัติเหตุ
                                ไปจนถึงการเจ็บป่วยที่ร้ายแรง
                            </p>
                        </div>

                        <div className="group bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#3593ca]/30">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Heart className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">การดูแลที่ใส่ใจ</h3>
                            <p className="text-gray-600 leading-relaxed">
                                ทีมงานมืออาชีพพร้อมให้คำปรึกษาและช่วยเหลือคุณตลอด 24 ชั่วโมง
                                ด้วยความเข้าใจและเอาใจใส่
                            </p>
                        </div>

                        <div className="group bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#3593ca]/30">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Award className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">มาตรฐานระดับโลก</h3>
                            <p className="text-gray-600 leading-relaxed">
                                ด้วยประสบการณ์กว่า 50 ปี และการรับรองมาตรฐานสากล
                                คุณมั่นใจได้ในคุณภาพการบริการของเรา
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Products Section */}
            <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            เลือกแผนที่เหมาะกับคุณ
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            แผนประกันชีวิตหลากหลายรูปแบบ ตอบโจทย์ทุกความต้องการและงบประมาณ
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${product.popular
                                    ? 'border-[#3593ca] scale-105 lg:scale-110 shadow-xl'
                                    : 'border-gray-100 hover:border-[#3593ca]/50'
                                    }`}
                            >
                                {product.popular && (
                                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-gradient-to-r from-[#3593ca] to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                                            <Star className="h-4 w-4 mr-1" />
                                            แนะนำ
                                        </div>
                                    </div>
                                )}

                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                                    <div className="space-y-4 mb-8">
                                        {product.features.map((feature, index) => (
                                            <div key={index} className="flex items-center">
                                                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                                    <CheckCircle className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t border-gray-100 pt-6">
                                        <div className="text-2xl font-bold bg-gradient-to-r from-[#3593ca] to-blue-600 bg-clip-text text-transparent mb-4">
                                            {product.price}
                                        </div>
                                        <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${product.popular
                                            ? 'bg-gradient-to-r from-[#3593ca] to-blue-600 text-white hover:shadow-lg hover:scale-105'
                                            : 'border-2 border-[#3593ca] text-[#3593ca] hover:bg-gradient-to-r hover:from-[#3593ca] hover:to-blue-600 hover:text-white hover:shadow-lg'
                                            }`}>
                                            เลือกแผนนี้
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced FAQ Section */}
            <section id="questions" className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            คำถามที่พบบ่อย
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            คำตอบสำหรับคำถามที่ลูกค้าสงสัยบ่อยที่สุด
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-medium text-gray-900">{faq.question}</span>
                                    <ChevronRight
                                        className={`h-5 w-5 text-gray-400 transition-transform ${activeFAQ === index ? 'rotate-90' : ''
                                            }`}
                                    />
                                </button>
                                {activeFAQ === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            ติดต่อเรา
                        </h2>
                        <p className="text-xl text-gray-600">
                            พร้อมให้คำปรึกษาและตอบคำถามทุกข้อสงสัยของคุณ
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Phone className="h-6 w-6 text-[#3593ca]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">โทรศัพท์</h3>
                                    <p className="text-gray-600">02-123-4567</p>
                                    <p className="text-gray-600">1-800-MOSMEPRAKUN</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Mail className="h-6 w-6 text-[#3593ca]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">อีเมล</h3>
                                    <p className="text-gray-600">info@mosmeprakun.co.th</p>
                                    <p className="text-gray-600">support@mosmeprakun.co.th</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <MapPin className="h-6 w-6 text-[#3593ca]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">ที่อยู่</h3>
                                    <p className="text-gray-600">
                                        123 อาคารมอสมีประกัน กรุงเทพฯ
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Clock className="h-6 w-6 text-[#3593ca]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">เวลาทำการ</h3>
                                    <p className="text-gray-600">จันทร์ - ศุกร์: 8:30 - 17:30</p>
                                    <p className="text-gray-600">เสาร์: 9:00 - 16:00</p>
                                    <p className="text-gray-600">อาทิตย์: ปิดทำการ</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">ส่งข้อความถึงเรา</h3>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อ-นามสกุล</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        placeholder="กรอกชื่อของคุณ"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">เบอร์โทรศัพท์</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        placeholder="08X-XXX-XXXX"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">อีเมล</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">ข้อความ</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        placeholder="กรอกข้อความของคุณ..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#3593ca] hover-[#2563eb] hover:shadow-lg hover:scale-105 transition-all  text-white py-3 px-6 rounded-lg font-semibold  transition-colors"
                                >
                                    ส่งข้อความ
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="fixed inset-x-0 bottom-4 pointer-events-none">
                <div className="flex justify-center pointer-events-auto">
                    <a
                        href="tel:099999999"
                        className="flex items-center bg-[#3593ca] text-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        โทรหาเรา 099-999-999
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default LifeInsurancePage;