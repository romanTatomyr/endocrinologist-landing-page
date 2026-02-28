"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

const posts = [
  {
    id: 1,
    title: "Розуміння гормонального балансу",
    category: "Гормони",
    image: "/endocrinologist-landing-page/journal-hormonal-balance-abstract-medical-art-soft-bl.jpg",
    content: `Гормональний баланс — це ключ до загального здоров'я та благополуччя. Наша ендокринна система — це складна мережа залоз, які виробляють гормони, що регулюють практично всі процеси в організмі.

Коли гормони збалансовані, ви відчуваєте енергію, ваша шкіра сяє, вага стабільна, а настрій рівний. Однак дисбаланс може призвести до втоми, збільшення ваги, проблем зі шкірою та емоційних коливань.

Основні фактори, що впливають на гормональний баланс:
• Якість сну та режим дня
• Харчування та рівень стресу  
• Фізична активність
• Вплив навколишнього середовища

Важливо регулярно перевіряти рівень гормонів та консультуватися з ендокринологом для підтримки оптимального здоров'я.`,
  },
  {
    id: 2,
    title: "Міфи про щитоподібну залозу",
    category: "Щитоподібна залоза",
    image: "/endocrinologist-landing-page/journal-thyroid-health-medical-illustration-butterfly.jpg",
    content: `Щитоподібна залоза — маленький орган з величезним впливом на організм. На жаль, навколо неї існує багато міфів, які можуть заважати правильній діагностиці та лікуванню.

Міф 1: "Якщо ТТГ в нормі — проблем немає"
Насправді, важливо оцінювати повну картину: Т3, Т4, антитіла. Іноді симптоми з'являються раніше, ніж змінюються показники.

Міф 2: "Гіпотиреоз — це назавжди"
Деякі форми гіпотиреозу можуть бути тимчасовими, особливо після пологів або на фоні дефіциту йоду.

Міф 3: "Йод корисний усім"
Надлишок йоду може бути так само шкідливим, як і його дефіцит. Важливо знати свій статус перед прийомом добавок.

Правильна діагностика та індивідуальний підхід — основа ефективного лікування захворювань щитоподібної залози.`,
  },
  {
    id: 3,
    title: "Метаболічне здоров'я в сучасному житті",
    category: "Метаболізм",
    image: "/endocrinologist-landing-page/journal-metabolic-health-lifestyle-medical-photograph.jpg",
    content: `Сучасний ритм життя часто негативно впливає на наш метаболізм. Сидяча робота, перекуси на ходу, хронічний стрес — усе це створює умови для метаболічних порушень.

Метаболічний синдром — це комплекс симптомів, що включає:
• Абдомінальне ожиріння
• Підвищений артеріальний тиск
• Порушення рівня глюкози
• Дисліпідемію

Хороша новина: метаболічне здоров'я можна покращити. Ключові стратегії:

1. Регулярна фізична активність — навіть 30 хвилин ходьби на день мають значення
2. Збалансоване харчування з акцентом на цілісні продукти
3. Достатній сон — 7-9 годин для дорослих
4. Управління стресом через медитацію або інші техніки

Малі, послідовні зміни призводять до великих результатів.`,
  },
  {
    id: 4,
    title: "Наднирникова втома: факт чи міф?",
    category: "Наднирники",
    image: "/endocrinologist-landing-page/journal-adrenal-health-abstract-medical-art-warm-tone.jpg",
    content: `"Наднирникова втома" — популярний термін в альтернативній медицині, але що каже доказова наука?

Офіційно медицина не визнає "наднирникову втому" як діагноз. Однак це не означає, що ваші симптоми не реальні. Хронічна втома, слабкість, проблеми з концентрацією — усе це потребує уваги.

Що може бути справжньою причиною:
• Справжня надниркова недостатність (хвороба Аддісона)
• Дисфункція гіпоталамо-гіпофізарної осі
• Порушення сну або апное
• Депресія або тривожні розлади
• Автоімунні захворювання
• Дефіцит вітамінів та мінералів

Важливо пройти комплексне обстеження, щоб знайти справжню причину симптомів, а не лікувати неіснуючий діагноз.`,
  },
  {
    id: 5,
    title: "Профілактика діабету 2 типу",
    category: "Діабет",
    image: "/endocrinologist-landing-page/journal-diabetes-prevention-healthy-lifestyle-medical.jpg",
    content: `Діабет 2 типу — одне з найпоширеніших хронічних захворювань, але його часто можна запобігти або відтермінувати.

Фактори ризику, які можна змінити:
• Надмірна вага, особливо абдомінальне ожиріння
• Малорухливий спосіб життя
• Нездорове харчування
• Паління

Стратегії профілактики:

Харчування: Обмежте прості вуглеводи та цукор. Збільшіть споживання клітковини, овочів, бобових. Контролюйте порції.

Активність: Мінімум 150 хвилин помірної активності на тиждень. Силові тренування 2-3 рази на тиждень покращують чутливість до інсуліну.

Моніторинг: Регулярно перевіряйте рівень глюкози, особливо якщо є фактори ризику. Раннє виявлення предіабету дає шанс повернути показники в норму.

Профілактика — найкраща інвестиція у ваше здоров'я.`,
  },
  {
    id: 6,
    title: "Вітамін D: більше, ніж вітамін",
    category: "Вітаміни",
    image: "/endocrinologist-landing-page/vitamin-d-sunshine-health-medical-soft-warm-tones.jpg",
    content: `Вітамін D насправді є прогормоном і впливає на значно більше процесів, ніж просто здоров'я кісток.

Функції вітаміну D:
• Підтримка імунної системи
• Регуляція настрою
• Здоров'я м'язів
• Профілактика автоімунних захворювань
• Метаболізм глюкози

Дефіцит вітаміну D надзвичайно поширений в Україні, особливо взимку. Симптоми дефіциту можуть бути неспецифічними: втома, біль у м'язах, часті застуди, пригнічений настрій.

Рекомендації:
1. Перевірте рівень 25(OH)D у крові
2. Оптимальний рівень — 40-60 нг/мл
3. Дозування добавок має бути індивідуальним
4. Приймайте з жирною їжею для кращого засвоєння
5. Комбінуйте з вітаміном К2 для здоров'я судин

Не призначайте собі високі дози самостійно — зверніться до лікаря.`,
  },
]

export function InsightsSection() {
  const [selectedPost, setSelectedPost] = useState<(typeof posts)[0] | null>(null)
  const drawerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function isEventInsideDrawer(e: Event) {
      const el = drawerRef.current
      const target = e.target as Node | null
      return !!el && target && el.contains(target)
    }

    function wheelHandler(e: WheelEvent) {
      if (!selectedPost) return
      if (!isEventInsideDrawer(e)) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    function touchHandler(e: TouchEvent) {
      if (!selectedPost) return
      if (!isEventInsideDrawer(e)) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    function keyHandler(e: KeyboardEvent) {
      if (!selectedPost) return
      const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", " ", "Home", "End"]
      if (keys.includes(e.key) && !isEventInsideDrawer(e)) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    const body = document.body
    const docEl = document.documentElement
    const originalOverflow = body.style.overflow
    const originalPaddingRight = body.style.paddingRight

    if (selectedPost) {
      const scrollBarWidth = window.innerWidth - docEl.clientWidth
      if (scrollBarWidth > 0) body.style.paddingRight = `${scrollBarWidth}px`
      body.style.overflow = "hidden"
      window.dispatchEvent(new CustomEvent("modal:open"))
      // focus drawer when opened
      setTimeout(() => drawerRef.current?.focus(), 0)
      document.addEventListener("wheel", wheelHandler, { passive: false, capture: true })
      document.addEventListener("touchmove", touchHandler, { passive: false, capture: true })
      document.addEventListener("keydown", keyHandler, { capture: true })
    }

    return () => {
      body.style.overflow = originalOverflow
      body.style.paddingRight = originalPaddingRight
      if (selectedPost) window.dispatchEvent(new CustomEvent("modal:close"))
      document.removeEventListener("wheel", wheelHandler, { capture: true } as any)
      document.removeEventListener("touchmove", touchHandler, { capture: true } as any)
      document.removeEventListener("keydown", keyHandler, { capture: true } as any)
    }
  }, [selectedPost])

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[#EAEAEA]/40 text-sm tracking-[0.3em] uppercase mb-8"
        >
          Інсайти
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer bg-[#252525] overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252525] to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category tag */}
                <span className="inline-block px-3 py-1 text-xs tracking-[0.15em] uppercase bg-[#EAEAEA]/10 text-[#EAEAEA]/60 mb-4">
                  {post.category}
                </span>

                <h3 className="text-xl md:text-2xl font-light text-[#EAEAEA] leading-tight group-hover:text-[#EAEAEA]/80 transition-colors duration-300">
                  {post.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 z-50"
              onClick={() => setSelectedPost(null)}
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[600px] lg:w-[700px] bg-[#1C1C1C] z-50 overflow-y-auto"
              ref={drawerRef}
              tabIndex={-1}
              style={{ WebkitOverflowScrolling: "touch" }}
              onWheel={(e: any) => {
                const el = drawerRef.current
                if (!el) return

                const delta = e.deltaY
                const prev = el.scrollTop
                const max = el.scrollHeight - el.clientHeight
                const next = Math.max(0, Math.min(max, prev + delta))

                if (next !== prev) {
                  el.scrollTop = next
                  e.preventDefault()
                  e.stopPropagation()
                } else {
                  e.preventDefault()
                  e.stopPropagation()
                }
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#EAEAEA]/10 flex items-center justify-center text-[#EAEAEA] hover:bg-[#EAEAEA]/20 transition-colors cursor-pointer z-10"
              >
                <X size={24} />
              </button>

              {/* Article header image */}
              <div className="relative h-72 md:h-96">
                <Image
                  src={selectedPost.image || "/placeholder.svg"}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/50 to-transparent" />
              </div>

              {/* Article content */}
              <div className="p-8 md:p-12 -mt-24 relative">
                <span className="inline-block px-3 py-1 text-xs tracking-[0.15em] uppercase bg-[#EAEAEA]/10 text-[#EAEAEA]/60 mb-6">
                  {selectedPost.category}
                </span>

                <h2 className="text-3xl md:text-4xl font-light text-[#EAEAEA] mb-8 leading-tight">
                  {selectedPost.title}
                </h2>

                <div className="prose prose-invert prose-lg max-w-none">
                  {selectedPost.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-[#EAEAEA]/70 text-lg leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
