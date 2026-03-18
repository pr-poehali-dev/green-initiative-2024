import { TrendingUp, ShieldCheck, Wallet, Fish, Plus, Minus, Mail, MapPin } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Какой доход я буду получать?",
      answer:
        "Вы получаете 50% от выручки с аренды купола. При загрузке 70–80% прогнозируемая годовая доходность составляет 35–40% на вложенный капитал. Это существенно выше банковских вкладов и большинства других доступных инструментов.",
    },
    {
      question: "За сколько окупится вложение?",
      answer:
        "При загрузке 70–80% срок окупаемости составляет около 2,7–3 лет. Клуб «Запрудный» работает круглый год — летом привлекает рыбаков карпом и осётром, зимой — форелью, что обеспечивает стабильный поток гостей в любой сезон.",
    },
    {
      question: "Нужно ли мне заниматься управлением?",
      answer:
        "Нет. Все операционные вопросы — уборка, коммунальные услуги, обслуживание, заселение гостей — берёт на себя база «Запрудный». Ваша задача — только получать ежемесячные выплаты.",
    },
    {
      question: "Что именно входит в стоимость 4,5 млн рублей?",
      answer:
        "Стоимость «под ключ» включает сам геокупол с полной отделкой, мебель, сантехнику, бытовую технику и всё необходимое для комфортного проживания гостей. Купол готов к сдаче в аренду с первого дня.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/a5648f70-ae67-48b4-b0c5-d7dc629b93a7/files/16207282-ba08-444d-9333-079b2cb98369.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Fish className="w-5 h-5" />
            <span className="font-medium text-balance">Клуб «Запрудный»</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Преимущества", "Как работает", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Получить предложение</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Инвестиционное предложение · Московская область</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Пассивный доход на готовом бизнесе.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Купите геокупол «под тапочки» за 4,5 млн рублей — и получайте 50% от выручки с аренды в рыболовном клубе «Запрудный». Управление на себя берёт база.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Оставить заявку
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Узнать подробнее
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Коломенский район, Московская область · Круглогодичная работа</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Доходность */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">35–40% годовых</h3>
              <p className="text-white/80 leading-relaxed">Прогнозируемая доходность — выше банковских вкладов и большинства инструментов.</p>
            </div>

            {/* Окупаемость */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Clock" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">2,7–3 года окупаемость</h3>
              <p className="text-white/80 leading-relaxed">Быстрый возврат инвестиций при загрузке 70–80%.</p>
            </div>

            {/* Без хлопот */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Без вашего участия</h3>
              <p className="text-white/80 leading-relaxed">База берёт на себя уборку, коммуналку и обслуживание.</p>
            </div>

            {/* Реальный актив */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Реальный актив</h3>
              <p className="text-white/80 leading-relaxed">Собственность, которую можно продать или оставить наследникам.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Как это работает</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Четыре простых шага — от вложения до ежемесячного дохода.
              </p>
            </div>

            {/* Steps Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Покупаете купол</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Вы приобретаете геокупол «под ключ» за 4,5 млн рублей — с мебелью, техникой, сантехникой. Всё готово к заселению гостей.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Размещение на базе</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Купол устанавливается на территории действующего клуба «Запрудный» и передаётся в управление базе.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">База сдаёт туристам</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    База самостоятельно привлекает гостей, занимается уборкой, коммуналкой и всеми операционными вопросами круглый год.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Вы получаете доход</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Ежемесячно вы получаете 50% от выручки с аренды. Ваше участие — только получение выплат.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Оставить заявку на купол
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Отвечаем на главные вопросы об условиях инвестирования, доходности и управлении куполом.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Оставить заявку</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Получить инвестиционное предложение</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Комментарий
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Вопросы или пожелания..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Right Column - Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Оставьте заявку — мы свяжемся с вами, ответим на все вопросы и пришлём полный пакет инвестиционных документов. Отвечаем в течение одного рабочего дня.
                  </p>
                </div>

                {/* Key Numbers */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 text-center">
                    <div className="text-4xl font-bold mb-2">4,5 млн</div>
                    <div className="text-white/70 text-sm">стоимость под ключ</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 text-center">
                    <div className="text-4xl font-bold mb-2">50%</div>
                    <div className="text-white/70 text-sm">от выручки — вам</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 text-center">
                    <div className="text-4xl font-bold mb-2">35–40%</div>
                    <div className="text-white/70 text-sm">годовых</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 text-center">
                    <div className="text-4xl font-bold mb-2">~3 года</div>
                    <div className="text-white/70 text-sm">окупаемость</div>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <Fish className="w-8 h-8 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Клуб «Запрудный»</h4>
                      <p className="text-gray-600">Коломенский район, МО</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать напрямую
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Fish className="w-6 h-6" />
                  <span className="text-xl font-semibold">Клуб «Запрудный»</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Рыболовный клуб «Запрудный» — действующая база в Коломенском районе Московской области. Круглогодичная рыбалка, развитая инфраструктура, постоянный поток гостей.
                </p>
              </div>

              {/* Investment Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ИНВЕСТИЦИИ</h3>
                <ul className="space-y-3">
                  {["Условия", "Доходность", "Документы", "FAQ"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О КЛУБЕ</h3>
                <ul className="space-y-3">
                  {["О нас", "Инфраструктура", "Рыбалка", "Фотогалерея"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Контакты", "Вопросы и ответы", "Условия сделки"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Следите за новостями проекта</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2025 Рыболовный клуб «Запрудный»</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
