// 100 ta Paskal va Olimpiada masalalari savollar bazasi
export const QUESTIONS_POOL = [
  {
    "id": 1,
    "question": "1-misol: Natural n sonining raqamlarini o'ng tomondan bittalab ajratib olish dasturida oxirgi raqamni topish uchun qaysi ifoda ishlatilgan?",
    "options": [
      "p := n mod 10",
      "p := n div 10",
      "p := n - 10",
      "p := round(n / 10)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 2,
    "question": "1-misol: Raqamlarni ajratish siklida o'ngdagi oxirgi raqamni sondan o'chirib tashlash qaysi operator bilan bajariladi?",
    "options": [
      "n := n mod 10",
      "n := n div 10",
      "n := n - 1",
      "n := trunc(sqrt(n))"
    ],
    "correctAnswer": 1
  },
  {
    "id": 3,
    "question": "2-misol: Kiritilgan sonning birinchi va oxirgi raqamlari o'rnini almashtirishda sikl qaysi shart bajarilgunicha davom etadi?",
    "options": [
      "n <> 0",
      "n > 100",
      "n >= 10",
      "n = 0"
    ],
    "correctAnswer": 2
  },
  {
    "id": 4,
    "question": "3-misol: Natural son raqamlarini teskari tartibda yozib yangi son hosil qilishda qaysi formuladan foydalanilgan?",
    "options": [
      "n1 := n1 + p",
      "n1 := n1 * 10",
      "n1 := p * 10 + n",
      "n1 := n1 * 10 + p"
    ],
    "correctAnswer": 3
  },
  {
    "id": 5,
    "question": "4-misol: Natural sonni tub ko'paytuvchilarga ajratuvchi dasturda bo'luvchi qaysi sondan boshlab tekshiriladi?",
    "options": [
      "2",
      "1",
      "3",
      "0"
    ],
    "correctAnswer": 0
  },
  {
    "id": 6,
    "question": "4a-misol: Takomillashgan algoritmda son avval 2 ga bo'lib bo'lingach, keyingi siklda bo'luvchi qanday qadam bilan oshiriladi?",
    "options": [
      "i := i + 1",
      "i := i + 2",
      "i := i * 2",
      "i := i + 3"
    ],
    "correctAnswer": 1
  },
  {
    "id": 7,
    "question": "5-misol: Berilgan n butun soni tarkibida 2 raqami bor-yo'qligini aniqlash dasturida qaysi shart tekshiriladi?",
    "options": [
      "if n = 2",
      "if n div 10 = 2",
      "if p = 2",
      "if k <> 0"
    ],
    "correctAnswer": 2
  },
  {
    "id": 8,
    "question": "7-misol: O'zining raqamlari kublari yig'indisiga qo'shilganda teskarisi hosil bo'luvchi ikki xonali sonlar qaysi oraliqda qidiriladi?",
    "options": [
      "1 dan 100 gacha",
      "10 dan 50 gacha",
      "20 dan 80 gacha",
      "10 dan 99 gacha"
    ],
    "correctAnswer": 3
  },
  {
    "id": 9,
    "question": "8-misol: Natural sonning kvadrati m ga tengligini Paskal tilida tekshirish qaysi ifoda orqali yozilgan?",
    "options": [
      "if sqr(s) = m",
      "if sqrt(s) = m",
      "if s * 2 = m",
      "if exp(s) = m"
    ],
    "correctAnswer": 0
  },
  {
    "id": 10,
    "question": "16-mashq: Agar son o'zidan tashqari barcha bo'luvchilari yig'indisiga teng bo'lsa, kitobda bunday son nima deb atalgan?",
    "options": [
      "Tub son",
      "Mukammal son",
      "Murakkab son",
      "Palindrom son"
    ],
    "correctAnswer": 1
  },
  {
    "id": 11,
    "question": "20-misol: O'ngdan chapga va chapdan o'ngga bir xil o'qiladigan sonlar qanday nomlanadi?",
    "options": [
      "Armstrong sonlari",
      "Mersen sonlari",
      "Palindromlar",
      "Egizak sonlar"
    ],
    "correctAnswer": 2
  },
  {
    "id": 12,
    "question": "21-misol: Raqamlar soni juft bo'lgan 131 ga karrali eng kichik natural sonni topishda sikl qaysi shart bilan to'xtatiladi?",
    "options": [
      "until a = 0",
      "until n mod 131 = 0",
      "until k = 2",
      "until k mod 2 = 0"
    ],
    "correctAnswer": 3
  },
  {
    "id": 13,
    "question": "22-misol: Sonning raqamlar yig'indisini bir xonali son qolguncha takroran hisoblash natijasi nima deyiladi?",
    "options": [
      "Raqamli ildiz",
      "Kvadrat ildiz",
      "Arifmetik ildiz",
      "Bo'luvchi"
    ],
    "correctAnswer": 0
  },
  {
    "id": 14,
    "question": "24-misol: Sonning barcha bo'luvchilarini sodda usulda qidirganda sikl qaysi chegaragacha davom ettiriladi?",
    "options": [
      "until d > n",
      "until d > n div 2",
      "until d = n",
      "until d * d > n"
    ],
    "correctAnswer": 1
  },
  {
    "id": 15,
    "question": "24a-misol: Sonning bo'luvchilarini tezkor 2-usulda topishda sikl qaysi shart asosida tashkil etilgan?",
    "options": [
      "while d < n do",
      "while d <= n div 2 do",
      "while d * d < n do",
      "repeat until d = n"
    ],
    "correctAnswer": 2
  },
  {
    "id": 16,
    "question": "25-misol: 36 va 45 sonlarining eng katta umumiy bo'luvchisi (EKUB) kitob bo'yicha nechaga teng deb topilgan?",
    "options": [
      "3",
      "6",
      "12",
      "9"
    ],
    "correctAnswer": 3
  },
  {
    "id": 17,
    "question": "25c-misol: Evklid algoritmining ayirish usulida qaysi sikl operatori qo'llanilgan?",
    "options": [
      "while a <> b do",
      "repeat until a = b",
      "for i := a to b do",
      "while a > 0 do"
    ],
    "correctAnswer": 0
  },
  {
    "id": 18,
    "question": "25d-misol: Evklid algoritmining 2-usulida qoldiq r hisoblangach, o'zgaruvchilar qanday yangilanadi?",
    "options": [
      "a := r; b := a",
      "a := b; b := r",
      "b := a; a := r",
      "a := a - b; b := r"
    ],
    "correctAnswer": 1
  },
  {
    "id": 19,
    "question": "26-misol: Dasturda a va b sonlarining EKUKini topish uchun ikkinchi algoritm qaysi formulaga tayanadi?",
    "options": [
      "a * b = EKUK(a, b) + EKUB(a, b)",
      "EKUK(a, b) = a * b * EKUB(a, b)",
      "a * b = EKUK(a, b) * EKUB(a, b)",
      "EKUK(a, b) = (a + b) / EKUB(a, b)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 20,
    "question": "27-misol: Natural n sonining tubligini tekshirish dasturida k bo'luvchilar soni bo'lsa, qaysi shartda \"tub son\" deb chiqariladi?",
    "options": [
      "if k = 1",
      "if k = 2",
      "if k > 0",
      "if k = 0"
    ],
    "correctAnswer": 1
  },
  {
    "id": 21,
    "question": "28-misol: Sonning tubligini 2-usul bilan aniqlashda qaysi ikkita son alohida shart bilan tekshirib olinadi?",
    "options": [
      "n=2 va n=3",
      "n=1 va n=2",
      "n=3 va n=5",
      "n=0 va n=1"
    ],
    "correctAnswer": 0
  },
  {
    "id": 22,
    "question": "51-misol: a^2 + b^2 = c^2 tenglikni qanoatlantiruvchi natural sonlar qanday nomlanadi?",
    "options": [
      "Mersen sonlari",
      "Pifagor sonlari",
      "Ferma sonlari",
      "Armstrong sonlari"
    ],
    "correctAnswer": 1
  },
  {
    "id": 23,
    "question": "54-misol: Haqiqiy x sonining kasr qismini yaxlitlamasdan tashlab yuboruvchi Paskal funksiyasi qaysi?",
    "options": [
      "round(x)",
      "abs(x)",
      "trunc(x)",
      "frac(x)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 24,
    "question": "54-misol: Haqiqiy x sonini eng yaqin butun songacha yaxlitlaydigan Paskal funksiyasi qaysi?",
    "options": [
      "int(x)",
      "trunc(x)",
      "sqr(x)",
      "round(x)"
    ],
    "correctAnswer": 3
  },
  {
    "id": 25,
    "question": "82-misol: 2^p - 1 ko'rinishidagi barcha tub sonlar fanda kimning nomi bilan ataladi?",
    "options": [
      "Mersen sonlari",
      "Pifagor sonlari",
      "Eratosfen sonlari",
      "Goldbax sonlari"
    ],
    "correctAnswer": 0
  },
  {
    "id": 26,
    "question": "84-misol: Raqamlari soni n bo'lgan sonning n-darajaga ko'tarilgan raqamlari yig'indisi o'ziga teng bo'lsa, bu qanday son?",
    "options": [
      "Mukammal son",
      "Armstrong soni",
      "Palindrom son",
      "Tub son"
    ],
    "correctAnswer": 1
  },
  {
    "id": 27,
    "question": "84-misol: Kitobda 3 xonali Armstrong soniga qaysi son misol tariqasida keltirilgan?",
    "options": [
      "121",
      "215",
      "153",
      "370"
    ],
    "correctAnswer": 2
  },
  {
    "id": 28,
    "question": "88-misol: Kitob betlarini nomerlash masalasida 1 xonali sonlar (1 dan 9 gacha) uchun nechta raqam ishlatiladi?",
    "options": [
      "10 ta",
      "8 ta",
      "18 ta",
      "9 ta"
    ],
    "correctAnswer": 3
  },
  {
    "id": 29,
    "question": "90-misol: 123456789101112... ketma-ket yozilganda nechta raqamdan keyingi oxirgi raqamni topish talab etiladi?",
    "options": [
      "1000 ta",
      "100 ta",
      "500 ta",
      "1971 ta"
    ],
    "correctAnswer": 3
  },
  {
    "id": 30,
    "question": "91-misol: Barcha juft sonlar ketma-ket yozilganda (24681012...) nechanchi o'rindagi raqamni topish so'ralgan?",
    "options": [
      "1000-o'rindagi",
      "1971-o'rindagi",
      "2000-o'rindagi",
      "500-o'rindagi"
    ],
    "correctAnswer": 1
  },
  {
    "id": 31,
    "question": "92-misol: Olti xonali avtobus chiptasi qachon \"baxtli chipta\" hisoblanadi?",
    "options": [
      "Raqamlari yig'indisi 21 ga teng bo'lsa",
      "Raqamlari faqat toq bo'lsa",
      "Birinchi 3 ta raqami yig'indisi oxirgi 3 ta raqami yig'indisiga teng bo'lsa",
      "Son palindrom bo'lsa"
    ],
    "correctAnswer": 2
  },
  {
    "id": 32,
    "question": "92-misol: Baxtli avtobus chiptalari nomerlari qaysi oraliqda ko'rib chiqiladi?",
    "options": [
      "[000001; 999999]",
      "[100000; 500000]",
      "[111111; 999999]",
      "[100000; 999999]"
    ],
    "correctAnswer": 0
  },
  {
    "id": 33,
    "question": "97-mashq: O'z raqamlari faktoriallarining yig'indisiga teng bo'lgan qiziq son (1! + 4! + 5!) nechaga teng?",
    "options": [
      "145",
      "120",
      "240",
      "405"
    ],
    "correctAnswer": 0
  },
  {
    "id": 34,
    "question": "108-misol: Ko'llar zanjiriga qo'nayotgan oq g'ozlar masalasida hosil bo'ladigan rekurrent munosabat qaysi?",
    "options": [
      "x_k = x_{k-1} / 2",
      "x_k = 2 * x_{k-1} - 1",
      "x_k = x_{k-1} + 2",
      "x_k = 2 * x_{k-1} + 1"
    ],
    "correctAnswer": 3
  },
  {
    "id": 35,
    "question": "108-misol: G'ozlar 7 ta ko'lga qo'ngan bo'lsa, galada boshida jami nechta oq g'oz bo'lgan?",
    "options": [
      "127 ta",
      "128 ta",
      "64 ta",
      "255 ta"
    ],
    "correctAnswer": 0
  },
  {
    "id": 36,
    "question": "120-misol: 25x - 36y = 1 ko'rinishidagi bittadan ortiq noma'lumga ega tenglamalar nima deb ataladi?",
    "options": [
      "Chiziqli tenglamalar sistemasi",
      "Noaniq tenglamalar (Diofant tenglamalari)",
      "Kvadratik tenglamalar",
      "Transsendent tenglamalar"
    ],
    "correctAnswer": 1
  },
  {
    "id": 37,
    "question": "121-misol: 15x + 37y = 1 tenglamaning butun yechimlarini topishda qaysi algoritm qo'llaniladi?",
    "options": [
      "Nyuton usuli",
      "Eratosfen to'ri",
      "Evklid algoritmi",
      "Monte-Karlo usuli"
    ],
    "correctAnswer": 2
  },
  {
    "id": 38,
    "question": "147-misol: n ta elementdan k tadan olingan tartiblangan qism to'plamlar nima deb ataladi?",
    "options": [
      "Birikmalar",
      "To'plamlar",
      "O'rin almashtirishlar",
      "Joylashtirishlar (A_n^k)"
    ],
    "correctAnswer": 3
  },
  {
    "id": 39,
    "question": "147-misol: n ta elementdan k tadan joylashtirishlar soni qaysi formula bilan topiladi?",
    "options": [
      "A_n^k = n! / (n - k)!",
      "A_n^k = n! / k!",
      "A_n^k = n! / (k! * (n-k)!)",
      "A_n^k = (n - k)! / n!"
    ],
    "correctAnswer": 0
  },
  {
    "id": 40,
    "question": "156-misol: n ta elementdan tashkil topgan to'plamning har qanday to'liq tartiblangan ko'rinishi nima deyiladi?",
    "options": [
      "Joylashtirish",
      "O'rin almashtirish (P_n)",
      "Birikma",
      "Qism to'plam"
    ],
    "correctAnswer": 1
  },
  {
    "id": 41,
    "question": "156-misol: 10 ta odam navbatda necha xil usul bilan turishi mumkin?",
    "options": [
      "10! usulda",
      "100 usulda",
      "2^10 usulda",
      "10 * 9 usulda"
    ],
    "correctAnswer": 0
  },
  {
    "id": 42,
    "question": "159-misol: Elementlari takrorlanadigan to'plamlar uchun o'rin almashtirishlar soni qaysi formula bilan topiladi?",
    "options": [
      "P = n! * n1! * n2!",
      "P = n! / (n1! * n2! * ...)",
      "P = (n1 + n2)! / n!",
      "P = n! / (n - k)!"
    ],
    "correctAnswer": 1
  },
  {
    "id": 43,
    "question": "161-misol: n ta elementdan tuzilgan, elementlarning tartibi ahamiyatga ega bo'lmagan qism to'plamlar nima deyiladi?",
    "options": [
      "Joylashtirish",
      "O'rin almashtirish",
      "Birikma (C_n^k)",
      "Transpozitsiya"
    ],
    "correctAnswer": 2
  },
  {
    "id": 44,
    "question": "161-misol: n elementdan k tadan birikmalar soni formulasi qaysi?",
    "options": [
      "C_n^k = n! / (n - k)!",
      "C_n^k = k! / (n - k)!",
      "C_n^k = n! * k!",
      "C_n^k = n! / (k! * (n - k)!)"
    ],
    "correctAnswer": 3
  },
  {
    "id": 45,
    "question": "Nyuton binomidagi (a + b)^n yoyilmasining C_n^k koeffitsiyentlari qanday uchburchakni hosil qiladi?",
    "options": [
      "Paskal uchburchagi",
      "Pifagor uchburchagi",
      "Evklid uchburchagi",
      "Eratosfen uchburchagi"
    ],
    "correctAnswer": 0
  },
  {
    "id": 46,
    "question": "Paskal uchburchagining i-qatori j-elementi qaysi rekurrent munosabatga bo'ysunadi?",
    "options": [
      "a[i, j] = a[i-1, j] * 2",
      "a[i, j] = a[i-1, j-1] + a[i-1, j]",
      "a[i, j] = a[i, j-1] + 1",
      "a[i, j] = a[i-1, j] - a[i-1, j-1]"
    ],
    "correctAnswer": 1
  },
  {
    "id": 47,
    "question": "168-misol: 52 ta kartadan 10 tasi tanlanganda hech bo'lmaganda bitta tuz bo'lish kombinatsiyalari qanday hisoblanadi?",
    "options": [
      "C_52^10 + C_48^10",
      "C_52^4 * C_48^6",
      "C_52^10 - C_48^10",
      "C_48^10 - C_4^1"
    ],
    "correctAnswer": 2
  },
  {
    "id": 48,
    "question": "170-misol: Agar son q = p1^a1 * p2^a2 * ... ko'rinishida bo'lsa, uning barcha bo'luvchilari soni qaysi ko'paytmaga teng?",
    "options": [
      "a1 * a2 * ... * am",
      "(a1 - 1) * (a2 - 1) * ...",
      "a1 + a2 + ... + am",
      "(a1 + 1) * (a2 + 1) * ... * (am + 1)"
    ],
    "correctAnswer": 3
  },
  {
    "id": 49,
    "question": "191-misol: Massivning k-elementini surish orqali birinchi o'ringa ko'chirish sikli qaysi indeksgacha davom etadi?",
    "options": [
      "for i := k downto 2 do",
      "for i := k downto 1 do",
      "for i := 1 to k do",
      "for i := 2 to n do"
    ],
    "correctAnswer": 0
  },
  {
    "id": 50,
    "question": "194-misol: Tartiblangan massiv ichiga yangi son qo'shishda uning joyini topish uchun qaysi tezkor protsedura chaqiriladi?",
    "options": [
      "linear_search",
      "quick_search (ikkilik qidiruv)",
      "create",
      "middle"
    ],
    "correctAnswer": 1
  },
  {
    "id": 51,
    "question": "194-misol: Ikkilik qidiruv protsedurasida o'rta element indeksi qanday topiladi?",
    "options": [
      "s := (p + q) div 2",
      "s := (p + q) mod 2",
      "s := p + q div 2",
      "s := trunc(sqrt(p + q))"
    ],
    "correctAnswer": 0
  },
  {
    "id": 52,
    "question": "196-misol: Chapida o'zidan kichik, o'ngida o'zidan kattalar joylashgan massiv elementi nima deb ataladi?",
    "options": [
      "Boshlang'ich element",
      "\"O'rta\" element (middle/pivot)",
      "Minimal element",
      "Maksimal element"
    ],
    "correctAnswer": 1
  },
  {
    "id": 53,
    "question": "197-misol: Massivni \"o'rta\" element yordamida ikkiga bo'lib rekursiv tartiblash usuli qanday nomlanadi?",
    "options": [
      "Pufaksimon tartiblash",
      "Oddiy tanlash",
      "Tezkor tartiblash (fast / QuickSort)",
      "Sanash orqali tartiblash"
    ],
    "correctAnswer": 2
  },
  {
    "id": 54,
    "question": "221-misol: Massivdan nolga teng elementlarni oxiriga o'tkazishda elementlar o'rnini almashtirish uchun qanday protsedura tuzilgan?",
    "options": [
      "fast(q, p)",
      "create(n)",
      "eratosfen(n)",
      "swp(k, m)"
    ],
    "correctAnswer": 3
  },
  {
    "id": 55,
    "question": "222-misol: Tartiblangan ikkita sonli massivni bitta tartiblangan yangi massivga birlashtiruvchi protsedura nomi qanday?",
    "options": [
      "new(n, m, q, p, k, c)",
      "fast(q, p, a)",
      "union_array(a, b)",
      "sprain(n, m)"
    ],
    "correctAnswer": 0
  },
  {
    "id": 56,
    "question": "223-misol: Ikki o'lchovli matrisani bir o'lchovli massivga \"cho'zish\" (yoyish) protsedurasi dasturda qanday nomlangan?",
    "options": [
      "create_two",
      "sprain",
      "fast",
      "middle"
    ],
    "correctAnswer": 1
  },
  {
    "id": 57,
    "question": "223-misol: Matrisani ilonizi to'ldirishda qaysi ustunlar tepadan pastga qarab o'sib borish tartibida to'ldiriladi?",
    "options": [
      "Juft nomerli ustunlar",
      "Barcha ustunlar",
      "Toq nomerli ustunlar (v mod 2 <> 0)",
      "Faqat birinchi ustun"
    ],
    "correctAnswer": 2
  },
  {
    "id": 58,
    "question": "224a-misol: Matrisaning qatorlari bo'yicha ilonizi to'ldirishda juft qatorlar qaysi yo'nalishda to'ldiriladi?",
    "options": [
      "Chapdan o'ngga",
      "Diagonal bo'ylab",
      "Tepadan pastga",
      "O'ngdan chapga (m downto 1)"
    ],
    "correctAnswer": 3
  },
  {
    "id": 59,
    "question": "225-misol: Portfelga umumiy og'irligi 50 kg dan oshmaydigan eng qimmat darsliklarni joylashtirishda qaysi protsedura kombinatsiyalarni hosil qiladi?",
    "options": [
      "gen_comb",
      "fast",
      "eratosfen",
      "placement"
    ],
    "correctAnswer": 0
  },
  {
    "id": 60,
    "question": "261-misol: n x n doskada n ta bir-biriga xavf solmaydigan ladyalarni joylashtirish usullari soni nimaga teng?",
    "options": [
      "n^2",
      "n! (o'rin almashtirishlar soni)",
      "2^n",
      "C_n^2"
    ],
    "correctAnswer": 1
  },
  {
    "id": 61,
    "question": "263-misol: Tajribalar sonini berilgan aniqlik va kafolatlangan ehtimollik bo'yicha hisoblashda qaysi integral formula qo'llanilgan?",
    "options": [
      "Muavr-Laplas integral formulasi",
      "Eyler formulasi",
      "Nyuton-Leybnits formulasi",
      "Bernulli formulasi"
    ],
    "correctAnswer": 0
  },
  {
    "id": 62,
    "question": "264-misol: Kesmada ixtiyoriy tanlangan M va N nuqtalardan M nuqta A ga yaqinroq bo'lishi qaysi shart bilan tekshiriladi?",
    "options": [
      "x > y",
      "y > x",
      "x + y = 1",
      "|x - y| = 1"
    ],
    "correctAnswer": 1
  },
  {
    "id": 63,
    "question": "267-misol: Radiusi R ga teng doiraga ichki chizilgan muntazam uchburchak yuzasining doira yuzasiga nisbati nechaga teng?",
    "options": [
      "3 / (4 * pi)",
      "1 / pi",
      "(3 * sqrt(3)) / (4 * pi)",
      "sqrt(3) / pi"
    ],
    "correctAnswer": 2
  },
  {
    "id": 64,
    "question": "268a-misol: O'yin kubigi 2 marta tashlanganda chiqqan ballar yig'indisi 10 dan kichik bo'lmaslik sharti qanday yoziladi?",
    "options": [
      "x + y < 10",
      "x + y = 10",
      "x + y <= 10",
      "x + y >= 10"
    ],
    "correctAnswer": 3
  },
  {
    "id": 65,
    "question": "268b-misol: Birinchi kubikdagi son ikkinchisiga qoldiqsiz bo'linish ehtimolini hisoblash sharti qaysi?",
    "options": [
      "x mod y = 0",
      "y mod x = 0",
      "x div y = 0",
      "x = y"
    ],
    "correctAnswer": 0
  },
  {
    "id": 66,
    "question": "271-misol: Aylanada olingan ixtiyoriy 3 ta nuqta hosil qilgan uchburchakning o'tkir burchakli bo'lish ehtimoli nechaga teng?",
    "options": [
      "1/2",
      "1/4",
      "1/3",
      "3/4"
    ],
    "correctAnswer": 1
  },
  {
    "id": 67,
    "question": "306-misol: Qaytimni avtomatik hisoblashda eng kam tangalar sonini ishlatish uchun qaysi tangalardan boshlab beriladi?",
    "options": [
      "Qadri eng past tangalardan",
      "Faqat 1 santimlik tangalardan",
      "Qadri eng baland tangalardan",
      "Tasodifiy tanlangan tangalardan"
    ],
    "correctAnswer": 2
  },
  {
    "id": 68,
    "question": "306a-misol: Har bir nominaldagi tangalar soni Q[i] qaysi formula bilan hisoblanadi?",
    "options": [
      "Q[i] := E mod P[i]",
      "Q[i] := E * P[i]",
      "Q[i] := E - P[i]",
      "Q[i] := E div P[i]"
    ],
    "correctAnswer": 3
  },
  {
    "id": 69,
    "question": "307-misol: Qadimiy qasr devorlarini o'rab oluvchi eng qisqa to'siq masalasida kiruvchi ma'lumotlar qaysi fayldan o'qiladi?",
    "options": [
      "castle.in",
      "input.txt",
      "data.in",
      "castle.txt"
    ],
    "correctAnswer": 0
  },
  {
    "id": 70,
    "question": "308-misol: Paskal uchburchagining n-qatoridagi toq sonlar sonini chiqaruvchi dastur natijasi qaysi faylga yoziladi?",
    "options": [
      "output.txt",
      "pascal.out",
      "result.txt",
      "answer.out"
    ],
    "correctAnswer": 1
  },
  {
    "id": 71,
    "question": "309-misol: Tranzistorlarning sinishini tekshiruvchi tajribachi masalasida eng kam qavatlar sonini hisoblash dasturi fayli qaysi?",
    "options": [
      "tester.in",
      "input.txt",
      "test.in",
      "exam.txt"
    ],
    "correctAnswer": 0
  },
  {
    "id": 72,
    "question": "310-misol: Tortdagi shamlar kesmalar bilan bo'linganda bir bo'lakka bittadan ortiq sham tushsa ekranga nima chiqariladi?",
    "options": [
      "1",
      "ERROR",
      "NO",
      "YES"
    ],
    "correctAnswer": 2
  },
  {
    "id": 73,
    "question": "311-misol: Taqiqlangan n-burchak yasalishiga yo'l qo'ymaslik uchun kesmalar uzunligi qaysi qonuniyat asosida o'sishi kerak?",
    "options": [
      "Fibonachchi ketma-ketligi (r := l + p)",
      "Arifmetik progressiya",
      "Geometrik progressiya",
      "Faktoriallar qatori"
    ],
    "correctAnswer": 0
  },
  {
    "id": 74,
    "question": "312-misol: To'g'ri burchakli jadval uchlaridagi 4 ta yacheyka yig'indisi eng katta bo'lgan to'rtburchakni topish masalasi nomi nima?",
    "options": [
      "Qiyin masala",
      "Oson bo'lmagan masala (problem)",
      "Jadval tasviri",
      "Maksimal to'rtburchak"
    ],
    "correctAnswer": 1
  },
  {
    "id": 75,
    "question": "313-misol: Prezident dollar va yevroga neft sotib olishi masalasida javob qanday formatda chiqarilishi talab etiladi?",
    "options": [
      "Butun son ko'rinishida",
      "Verguldan keyin 4 ta belgi bilan",
      "Butundan keyin kamida ikkita belgi bilan",
      "Standart eksponentsial shaklda"
    ],
    "correctAnswer": 2
  },
  {
    "id": 76,
    "question": "315-misol: Oq va qora otlar kerakli katakka borishi uchun harakatlanish ketma-ketligi qaysi faylga yoziladi?",
    "options": [
      "result.out",
      "output.txt",
      "horse.out",
      "knights.out"
    ],
    "correctAnswer": 3
  },
  {
    "id": 77,
    "question": "316-misol: \"Saper\" o'yini maydonida mina joylashgan katak qanday belgi bilan ifodalanadi?",
    "options": [
      "\"*\" (yulduzcha)",
      "\".\" (nuqta)",
      "\"M\" harfi",
      "\"X\" belgisi"
    ],
    "correctAnswer": 0
  },
  {
    "id": 78,
    "question": "316-misol: \"Saper\" maydonida bo'sh katak qanday belgi bilan belgilanadi?",
    "options": [
      "Bo'sh joy (probel)",
      "\".\" (nuqta)",
      "\"0\" raqami",
      "\"-\" (chiziqcha)"
    ],
    "correctAnswer": 1
  },
  {
    "id": 79,
    "question": "319-misol: Vaqtni yozgi vaqtga o'tkazishda soat ko'rsatkichi qaysi formatda chiqariladi?",
    "options": [
      "hh:mm:ss",
      "h:m",
      "«hh : mm»",
      "mm:hh"
    ],
    "correctAnswer": 2
  },
  {
    "id": 80,
    "question": "321-misol: R radiusli aylanadagi ustunga bog'langan echkining o'tloqning teng yarmini yeyishi masalasi nomi nima?",
    "options": [
      "O'tloq masalasi",
      "Bog'langan arqon",
      "Aylana yuzasi",
      "Echki haqidagi masala"
    ],
    "correctAnswer": 3
  },
  {
    "id": 81,
    "question": "321a-misol: Echki masalasida D masofa bo'yicha yem yuzasini hisoblashda burchak qaysi teskari trigonometrik funksiya orqali topiladi?",
    "options": [
      "ARCTAN",
      "ARCSIN",
      "ARCCOS",
      "ARCCOT"
    ],
    "correctAnswer": 2
  },
  {
    "id": 82,
    "question": "323-misol: Hodisa guvohidan olingan avtomobil nomerida nechta harf va nechta raqam qatnashadi?",
    "options": [
      "2 ta harf, 4 ta raqam",
      "3 ta harf va 3 ta raqam",
      "4 ta harf, 2 ta raqam",
      "1 ta harf, 5 ta raqam"
    ],
    "correctAnswer": 1
  },
  {
    "id": 83,
    "question": "325-misol: Sex konveyerida mahsulotlar nechta konteynerga teng taqsimlanishi kerak?",
    "options": [
      "2 ta",
      "4 ta",
      "3 ta",
      "5 ta"
    ],
    "correctAnswer": 2
  },
  {
    "id": 84,
    "question": "326-misol: Yo'lchi varoqdagi aylanachalarni qaysi 3 ta rangdan biriga bo'yagan?",
    "options": [
      "Oq, qora, kulrang",
      "Sariq, ko'k, yashil",
      "Qizil, sariq, oq",
      "Qizil, yashil, ko'k (‘R’, ‘G’, ‘B’)"
    ],
    "correctAnswer": 3
  },
  {
    "id": 85,
    "question": "330-misol: Bekinmachoq o'yinida bolalarning aylanadan chiqishni unutib xato sanashi qaysi masala nomi bilan berilgan?",
    "options": [
      "Noto'g'ri hisoblagich (wrong)",
      "Doiraviy o'yin",
      "Bolalar sanog'i",
      "Bekinmachoq"
    ],
    "correctAnswer": 0
  },
  {
    "id": 86,
    "question": "333-misol: Murakkab sonlarni o'chirib faqat tub sonlarni qoldiruvchi qadimiy algoritm nima deyiladi?",
    "options": [
      "Evklid algoritmi",
      "Eratosfen to'ri",
      "Pifagor jadvali",
      "Paskal g'alviri"
    ],
    "correctAnswer": 1
  },
  {
    "id": 87,
    "question": "333-misol: Eratosfen to'ri dasturida tekshiruvchi sikl qaysi chegaragacha davom etadi?",
    "options": [
      "f := n div 2",
      "f := n - 1",
      "f := trunc(sqrt(n))",
      "f := round(n / 3)"
    ],
    "correctAnswer": 2
  },
  {
    "id": 88,
    "question": "333-misol: Eratosfen algoritmi dasturida murakkab sonlar o'chirilganda massiv elementi qaysi songa tenglashtiriladi?",
    "options": [
      "-1",
      "1",
      "null",
      "0"
    ],
    "correctAnswer": 3
  },
  {
    "id": 89,
    "question": "334-misol: \"4 dan katta har qanday juft sonni ikkita tub son yig'indisi ko'rinishida ifodalash mumkin\" bu qaysi gipoteza?",
    "options": [
      "Goldbax gipotezasi",
      "Ferma teoremasi",
      "Eyler gipotezasi",
      "Riman gipotezasi"
    ],
    "correctAnswer": 0
  },
  {
    "id": 90,
    "question": "335-misol: Ayirmasi 2 ga teng bo'lgan tub sonlar (masalan, 5 va 7) fanda nima deb ataladi?",
    "options": [
      "Qo'shni sonlar",
      "Egizaklar (egizak tub sonlar)",
      "Do'st sonlar",
      "Simmetrik sonlar"
    ],
    "correctAnswer": 1
  },
  {
    "id": 91,
    "question": "336-misol: Ikkita shaxs 11 va 12 soatlar orasida kelib 20 minut (1/3 soat) kutishi geometrik jihatdan qaysi shartni beradi?",
    "options": [
      "|x - y| <= 1/3",
      "x + y <= 1/3",
      "x - y = 1/3",
      "|x - y| >= 1/3"
    ],
    "correctAnswer": 0
  },
  {
    "id": 92,
    "question": "336-misol: 20 minut kutish shartida uchrashuvning sodir bo'lish ehtimoli Monte-Karlo usulida taxminan qanchaga teng chiqadi?",
    "options": [
      "0.3333",
      "0.7500",
      "0.5000",
      "0.5555 (5/9)"
    ],
    "correctAnswer": 3
  },
  {
    "id": 93,
    "question": "339-misol: Tomoni 1 bo'lgan katak markazidan 1/2 dan kichik masofada joylashish ehtimoli qaysi sonni hisoblashda qo'llaniladi?",
    "options": [
      "Pi sonini (Pi / 4)",
      "e sonini",
      "Oltin nisbatni",
      "Ildiz ostida 2 ni"
    ],
    "correctAnswer": 0
  },
  {
    "id": 94,
    "question": "339-misol: Kvadratga tushgan m ta nuqta va umumiy n ta nuqtadan Pi sonini topish formulasi dasturda qanday berilgan?",
    "options": [
      "p := m / n",
      "p := 4 * m / n",
      "p := 2 * m / n",
      "p := m / (4 * n)"
    ],
    "correctAnswer": 1
  },
  {
    "id": 95,
    "question": "340-misol: Tekislikka uzunligi 1 bo'lgan igna tashlanganda chiziqni kesib o'tish ehtimoli qaysi klassik masala hisoblanadi?",
    "options": [
      "Eyler masalasi",
      "Paskal masalasi",
      "Byuffonning igna to'g'risidagi masalasi",
      "Gauss masalasi"
    ],
    "correctAnswer": 2
  },
  {
    "id": 96,
    "question": "340-misol: Byuffon ignasi masalasida ehtimollik qaysi analitik qiymatga teng bo'ladi?",
    "options": [
      "1 / Pi",
      "Pi / 2",
      "4 / Pi",
      "2 / Pi"
    ],
    "correctAnswer": 3
  },
  {
    "id": 97,
    "question": "341-misol: Benaress ibodatxonasidagi Xanoy minorasi afsonasida rohiblar jami nechta oltin diskni ko'chirishlari kerak bo'lgan?",
    "options": [
      "64 ta",
      "32 ta",
      "128 ta",
      "100 ta"
    ],
    "correctAnswer": 0
  },
  {
    "id": 98,
    "question": "341-misol: n ta diskdan iborat Xanoy minorasini ko'chirish uchun jami nechta operatsiya talab etiladi?",
    "options": [
      "2 * n",
      "2^n - 1",
      "n^2",
      "2^n + 1"
    ],
    "correctAnswer": 1
  },
  {
    "id": 99,
    "question": "342-misol: Shaxmat doskasida 8 ta ferz bir-birini urmasligi uchun ularning diagonallari to'qnashmaslik sharti qanday yoziladi?",
    "options": [
      "D[i] <> D[j]",
      "abs(D[i] - D[j]) = abs(i - j)",
      "abs(D[i] - D[j]) <> abs(i - j)",
      "D[i] + i <> D[j] + j"
    ],
    "correctAnswer": 2
  },
  {
    "id": 100,
    "question": "347-misol: Santa-Klausning 5x5 o'lchamli jadvaldagi mahfiy tilida qaysi lotin harfi ishlatilmaydi?",
    "options": [
      "'X'",
      "'Y'",
      "'W'",
      "'Z'"
    ],
    "correctAnswer": 2
  }
];

/**
 * 100 ta savol ichidan tasodifiy k ta (40 ta) savolni tanlab olish
 * Fisher-Yates algoritmi
 */
export function getRandomQuestions(count = 40) {
  const pool = [...QUESTIONS_POOL];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

/**
 * Maxsus ishtirokchini aniqlash:
 * Agar ism "Abdullayev Temurmalik" yoki "Imonov Mahmudjon" (yoki birgalikda) bo'lsa
 * va sinf "10-B" bo'lsa, maxsus tartib qo'llanadi.
 */
export function isSpecialStudent(fullName = '', className = '') {
  if (!fullName || !className) return false;

  const normName = fullName.toLowerCase().replace(/['`ʻ’]/g, '').trim();
  const normClass = className.toLowerCase().trim();

  const isClass10B = normClass === '10-b' || normClass === '10-б';
  if (!isClass10B) return false;

  const hasTemurmalik = normName.includes('temurmalik') || (normName.includes('temur') && normName.includes('abdullayev'));
  const hasMahmudjon = normName.includes('mahmudjon') || (normName.includes('mahmud') && normName.includes('imonov'));
  const hasBoth = normName.includes('abdullayev') && normName.includes('imonov');

  return hasTemurmalik || hasMahmudjon || hasBoth;
}

/**
 * Talabaga mos savollarni berish:
 * Abdullayev Temurmalik va Imonov Mahmudjon (10-B) uchun 1 dan 40 gacha qat'iy tartibda.
 * Qolgan barcha o'quvchilar uchun to'liq tasodifiy (random) 40 ta savol.
 */
export function getQuestionsForStudent(fullName, className) {
  if (isSpecialStudent(fullName, className)) {
    // 1-savoldan 40-savolgacha qat'iy navbat bilan
    return QUESTIONS_POOL.slice(0, 40);
  }
  // Qolgan barcha uchun tasodifiy
  return getRandomQuestions(40);
}
