var store = [{
        "title": "Как майнить на ETHMiner - настройка для Binance Pool  [2021]",
        "excerpt":"ETHMiner требует Windows x64 (Windows 7, Windows 10 и т.д.) Или Linux x64 (проверено на Ubuntu LTS и стабильной версии Debian)    Для начала вы можете скачать самую последнюю версию ETHMiner 0.19.0 отсюда:   Скачать сейчас   Скачать (зеркало)   Установка     Скачайте исполняемый файл здесь: Github;   Извлеките файлы;   Обновите .bat файл для монеты, которую вы хотите майнить, с адресом вашего кошелька. Например, в нашем случае Ehereum-binance-pool.bat;   Запустите майнер, используя обновленный .bat файл: Ehereum-binance-pool.bat;   Проверьте статистику майнинга на странице пула: https://pool.binance.com/ru.   Самый простой способ получить адрес кошелька - это зарегистрироваться на такой бирже криптовалюты как Binance или Huobi.   ETHMiner имеет интерфейс командной строки. Для минимальной конфигурации введите в .bat файле:   ethminer -a [алгоритм майнинга] -o [сервер пула] -u [имя пользователя или адрес кошелька]   Пример:   ethminer.exe -P stratum1+tcp://0x360d6f9efea21c82d341504366fd1c2eeea8fa9d.ethminer@eu1.ethermine.org:4444   Для получения полного списка параметров конфигурации выполните:   ethminer --help   Готовые шаблоны представлены ниже.   Ethereum (ETH)   ethermine:  ethminer.exe -P stratum1+tcp://0x360d6f9efea21c82d341504366fd1c2eeea8fa9d.ethminer@eu1.ethermine.org:4444   sparkpool:  ethminer.exe -P stratum1+tcp://0x3aa3e06c47cadef96202d378ab7c407cf46a36a4.ethminer@eu.sparkpool.com:3333   f2pool:  ethminer.exe -P stratum2+tcp://rgz.rgz@eth.f2pool.com:6688   beepool:  ethminer.exe -P stratum1+tcp://0x91Bc4865C0C1beAC64389C9E2faaDec6D02d0c8C.ethminer@eth-pool.beepool.org:9530   nanopool:  ethminer.exe -P stratum1+tcp://stratum1+tcp://0x91Bc4865C0C1beAC64389C9E2faaDec6D02d0c8C.rig1@eth-eu2.nanopool.org:9999 --api-bind 127.0.0.1:3333   nicehash:  ethminer.exe -P stratum2+tcp://3LZhp4g3m7YWqR4hAPrZsKWbyo7hRBmqvy.ethminer@daggerhashimoto.eu.nicehash.com:3353     Настройте ETHMiner для максимальной прибыли! Читайте полный гайд по настройке ETHMiner   -G,--opencl         Использовать только AMD карты (opencl) -U,--cuda           Использовать только NVIDIA карты (cuda)   Статистика:     ","categories": ["documentation"],
        "tags": ["ETHMiner"],
        "url": "https://ethminer.tech/documentation/setup/",
        "teaser": "https://ethminer.tech/assets/images/thumbs/500x300.png"
      },{
        "title": "ETHMiner&#58; Настройки, Команды, Параметры Командной Строки",
        "excerpt":"**    Скачать   Скачать сейчас   Скачать (зеркало)   Параметры командной строки：   `ethminer.exe -P stratum1+tcp://username1.worker_name@ethash.poolbinance.com:8888`   Быстрый запуск:   ethminer [тип_устройства] [опция_подключения] -P... [-P...]   Варианты типов устройств   По умолчанию ethminer будет пытаться использовать все типы устройств, которые он может обнаружить. При желании вы можете ограничить этот параметр поведения одним из следующих вариантов:       -G,--opencl         Mine/Benchmark using OpenCL only     -U,--cuda           Mine/Benchmark using CUDA only   Опции подключения   -P,--pool           Stratum pool or http (getWork) connection as URL \t\t\t\t\tscheme://[user[.workername][:password]@]hostname:port[/...] \t\t\t\t\tFor an explication and some samples about \t\t\t\t\thow to fill in this value please use \t\t\t\t\tethminer --help-ext con   Общие параметры   -h,--help           Displays this help text and exits -H,--help-ext       TEXT {'con','test',cl,cu,api,'misc','env'} \t\t\t\t\tDisplay help text about one of these contexts: \t\t\t\t\t'con'  Connections and their definitions \t\t\t\t\t'test' Benchmark/Simulation options \t\t\t\t\t'cl'   Extended OpenCL options \t\t\t\t\t'cu'   Extended CUDA options \t\t\t\t\t'api'  API and Http monitoring interface \t\t\t\t\t'misc' Other miscellaneous options \t\t\t\t\t'env'  Using environment variables -V,--version        Show program version and exits   ","categories": ["documentation"],
        "tags": ["ETHMiner"],
        "url": "https://ethminer.tech/documentation/arguments/",
        "teaser": "https://ethminer.tech/assets/images/thumbs/500x300.png"
      },{
        "title": "Лучшие Программы для Майнинга на Домашнем ПК (ТОП 5)",
        "excerpt":"Есть много программ для майнинга криптовалюты, доступных как для Windows, так и для Linux. Однако некоторые из них имеют лучшие функции, более низкую комиссию или лучше работают на определенных видеокартах.    Скачать Ethminer   Скачать сейчас Скачать (зеркало)   Сегодня мы рассмотрим ТОП-5 программ для майнинга, которые будут использоваться в 2021 году для видеокарт AMD и Nvidia.   Обратите внимание, что со временем лучшие майнеры могут измениться по мере выпуска новых обновлений и исправлений, а также новых функций.   Помните, что все упомянутое программное обеспечение для майнинга и многое другое доступно в нашей операционной системе для майнинга - Hive OS   NBMiner   Nbminer   Прямо сейчас существует большой выбор майнеров для видеокарт Nvidia. Однако лишь некоторые из них выделяются своими характеристиками и стабильностью.   В настоящее время одним из лучших майнеров является Nbminer, который много работает над разблокировкой режима LHR для видеокарт Nvidia.   Всего несколько дней назад была выпущена новая версия Nbminer, которая позволяет заблокированной серии 30, также известной как LHR, повышать хешрейт до 35% на некоторых картах.   В настоящий момент мы можем наблюдать, что хешрейт 3060 TI повысился с 30 до 40 MH/s. 3070 TI может достигать 50 MH/s, а разблокированный 3080 TI может достигать 80 MH/s.   Хотя это обновление не делает видеокарты Nvidia Locked намного лучше, чем раньше, мы думаем, что это только вопрос времени и дополнительных обновлений, когда мы увидим гораздо более высокий хешрейт для всех этих видеокарт.   При выборе Nbminer важно помнить, что этот майнер имеет комиссию за разработку в размере 1% для майнинга Ethereum и поддерживается всеми версиями Linux и Windows. Он также может добывать другие монеты, такие как ERGO, RVN или Beam, и несколько более мелких.        T-Rex   T-Rex miner   Одним из лучших майнеров Nvidia является T-Rex, потому что он был создан только для поддержки видеокарт Nvidia. Он не поддерживает карты AMD, но может использоваться с зелеными видеокартами в Linux и Windows.   С акцентом на видеокарты Nvidia майнер T-Rex может обеспечить лучший хешрейт на большинстве карт, например 1080, которая может добывать до 35 MH/s и 1080 TI до 48 MH/s.   Если у вас есть старые карты Nvidia, приобретенные до 2021 года, это один из лучших майнеров, которые вы можете использовать.   Его превосходит только Nbminer из-за его разблокировки LHR для новых моделей, которые включают ограничитель хешрейта.   T-Rex может использовать более 30 алгоритмов, включая популярные, такие как Kawpow, ERG, MTP, и имеет плату за разработку в размере 1%, даже на Ethash.   Теперь, когда мы рассмотрели два лучих лучших варианта карт Nvidia, давайте также проявим любовь к AMD - к красным картам.        Teamredminer   Teamredminer   Как следует из названия, Team Red Miner - это майнер, разработанный специально для красных карточек, также известный как AMD.   Этот майнер будет работать только с этими видеокартами, поэтому, если у вас есть смешанная платформа, состоящая из зеленого и красного цветов, майнер не будет работать.   Teamredminer - весьма стабильный майнер, состоящий из множества функций, включая эксклюзивные разблокировки для AMD VII или видеокарт, которые при правильном использовании могут достигать более 108 MH/s, чего мы еще не видели ни с одним другим майнером.   Teamredminer также является весьма оптимизированным майнером для видеокарт Navi, таких как 5700 и 5700XT, поскольку он позволяет использовать гораздо более низкое напряжение ядра в панели разгона, имея при этом высокую скорость хеширования и низкое энергопотребление.   Этот майнер также содержит весьма подробное руководство о том, как максимально эффективно использовать ваши видеокарты Vega, еще одну модель карт AMD, оптимизированную с помощью этого майнера и не встречающуюся в других майнерах.   Teamredminer имеет комиссию за разработку в размере 1% для ethash и 0,75%, если у вас есть карты Polaris, например, RX 580. Он также может использовать другие алгоритмы, такие как Kawpow, lyra2rev3, MTP и многие другие.        Lolminer   lolminer   Одна из причин, по которой lolminer выделяется, - это его способность вдохнуть новую жизнь в карты, как это произошло в конце 2020 года, когда карты 4 ГБ перестали добывать Ethereum из-за размера DAG файла более 4 ГБ.   Когда это произошло, примерно в рождественский сезон, разработчик lolminer выпустила обновление, которое позволило старым видеокартам с недостаточным объемом памяти продолжить майнинг Ethereum со скоростью уменьшенного хеширования.   Это позволило майнерам с картами 4 ГБ майнить Ethereum в течение еще четырех-пяти месяцев, что принесло много монет в их кошельки, поскольку прибыльность майнинга резко выросла из-за высокой цены криптовалюты.   Еще одна особенность, предложенная lolminer, - это возможность подключить видеокарты даже с 4 ГБ памяти непосредственно к материнской плате и позволить ему работать почти на полную мощность, например, 30 MH/s в случае серии RX 470 RX 570 или RX  580.   Этот майнер также был первым, кто разблокировал первую ревизию видеокарты 3060 LHR, увеличив скорость с 25 до 39 MH/s в Linux, без подключения карт непосредственно к материнской плате или необходимости использования разъема HDMI.   Lolminer имеет комиссию 0,7% на Ethereum и может использовать другие алгоритмы, такие как Cuckoo 29,31,32 и Autolokys.        Gminer   Gminer   Gminer - это очень простое в использовании Windows-совместимое программное обеспечение, которое позволит вам добывать криптовалюту, используя вашу видеокарту (GPU). Программа позволяет добывать несколько типов криптовалют, таких как Ethereum, Ethereum, Ravencoin, Aion, Beam или даже Zclassic.   Майнер очень прост в использовании и имеет относительно понятный интерфейс.        Все эти майнеры были протестированы нами в течение длительного периода времени, были стабильны и работали без каких-либо проблем. Вот почему, на наш взгляд, это лучшие майнеры, которые вы можете использовать для майнинга криптовалюты в 2021 году.   ","categories": ["blog"],
        "tags": ["ETHMiner"],
        "url": "https://ethminer.tech/blog/software/",
        "teaser": "https://ethminer.tech/assets/images/thumbs/500x300.png"
      },{
        "title": "Скачать ETHMiner - последнюю версию (0.19.0) - [2021]",
        "excerpt":" Начните добывать Ethereum с помощью ETHMiner  \t\t \t\t\t \t\tПоследняя версия - 0.19.0 \t\tSHA256: e6614c7572887b7426b7149bbd68765bbe3a08ae71ccfd46d13c9d652c14eb5c *ETHMiner0.19.0.exe \t\t(Скачать для Linux)\t \t\t \t\t \t\t \t\t \t\tСкачать сейчас (Windows x64) \t\t \t\t(зеркало) \t\t \t     The new ETHMiner stale version is ready.   Вы можете скачать ETHMiner 0.19.0 отсюда:   Скачать Сейчас   Скачать (зеркало)   Внутри архива вы найдете файл README.txt с инструкциями по установке.   Обязательно замените пул и адрес кошелька тем, что вы используете во всех файлах.   Поддерживаемые криптовалюты    Криптовалюты \t \t\t \t\t\t# \t\t\tМонета \t\t\tАлгоритм \t\t \t\t \t\t\t1 \t\t\t2MINERS CLO \t\t\tEthash \t\t \t\t \t\t\t2 \t\t\t2MINERS ETH \t\t\tEthash \t\t \t\t \t\t\t3 \t\t\t2MINERS ETP \t\t\tEthash \t\t \t\t \t\t\t4 \t\t\t2MINERS EXP \t\t\tEthash \t\t \t\t \t\t\t5 \t\t\tAKA \t\t\tEthash \t\t \t\t \t\t\t6 \t\t\tATH \t\t\tEthash \t\t \t\t \t\t\t7 \t\t\tBINANCE ETH \t\t\tEthash \t\t \t\t \t\t\t8 \t\t\tCLO Callisto Network \t\t\tEthash \t\t \t\t \t\t\t9 \t\t\tDBIX \t\t\tEthash \t\t \t\t \t\t\t10 \t\t\tEGEM EtherGem \t\t\tEthash \t\t \t\t \t\t\t11 \t\t\tERE \t\t\tEthash \t\t \t\t \t\t\t12 \t\t\tESN EscudoNavacense \t\t\tEthash \t\t \t\t \t\t\t13 \t\t\tETH Ethereum \t\t\tEthash \t\t \t\t \t\t\t14 \t\t\tETHO Etho Protocol \t\t\tEthash \t\t \t\t \t\t\t15 \t\t\tETP Metaverse ETP \t\t\tEthash \t\t \t\t \t\t\t16 \t\t\tEXP \t\t\tEthash \t\t \t\t \t\t\t17 \t\t\tEZIL ETH Ezll \t\t\tEthash \t\t \t\t \t\t\t18 \t\t\tF2POOL ETH F2Pool \t\t\tEthash \t\t \t\t \t\t\t19 \t\t\tFLEXPOOL ETH Flexpool \t\t\tEthash \t\t \t\t \t\t\t20 \t\t\tHIVEON ETH \t\t\tEthash \t\t \t\t \t\t\t21 \t\t\tMO Ethash MoneroOcean \t\t\tEthash \t\t \t\t \t\t\t22 \t\t\tMO AC MOAC \t\t\tEthash \t\t \t\t \t\t\t23 \t\t\tMPH Ethash Mining Pool Hub \t\t\tEthash \t\t \t\t \t\t\t24 \t\t\tMRR Ethash Mining Rig Rentals \t\t\tEthash \t\t \t\t \t\t\t25 \t\t\tNANOPOOL ETH Nanopool \t\t\tEthash \t\t \t\t \t\t\t26 \t\t\tNH Ethash NiceHash \t\t\tEthash \t\t \t\t \t\t\t27 \t\t\tNILU Nilu \t\t\tEthash \t\t \t\t \t\t\t28 \t\t\tNUKO Nekonium \t\t\tEthash \t\t \t\t \t\t\t29 \t\t\tPGC Pegascoin \t\t\tEthash \t\t \t\t \t\t\t30 \t\t\tPOOLIN ETH \t\t\tEthash \t\t \t\t \t\t\t31 \t\t\tPROH Ethash Prohashing \t\t\tEthash \t\t \t\t \t\t\t32 \t\t\tQKC QuarkChain \t\t\tEthash \t\t \t\t \t\t\t33 \t\t\tREOSC REOSC Ecosystem \t\t\tEthash \t\t \t\t \t\t\t34 \t\t\tSPIDER ETH Spider \t\t\tEthash \t\t \t\t \t\t\t35 \t\t\tUNM Ethash unMineable \t\t\tEthash \t\t \t\t \t\t\t36 \t\t\tVIABTC ETH ViaBTC \t\t\tEthash \t\t \t\t \t\t\t37 \t\t\tZIL Zilliqa \t\t\tEthash \t\t \t\t \t\t\t38 \t\t\tZP Ethash \t\t\tEthash \t\t \t        ","categories": ["download"],
        "tags": ["ETHMiner"],
        "url": "https://ethminer.tech/download/latest/",
        "teaser": "https://ethminer.tech/assets/images/thumbs/500x300.png"
      },{
        "title": "Скачать ETHMiner 0.18.0 - AMD+Nvidia GPU Miner [2021]",
        "excerpt":" Начните добывать криптовалюту   с помощью ETHMiner  \t\t \t\t\t \t\tВерсия: 0.18.0  \t\tФайл: *ETHMiner.exe,   \t\tSHA256: b783c74e53a5fcdf7d798d268e1abf6f30235b792e041c9972ab844e015b1984  \t\t(Скачать для Linux)\t \t\t \t\t \t\t \t\t \t\tСкачать сейчас(Windows x64) \t\t \t\t(зеркало) \t\t \t     The new ETHMiner stale version is ready.   Вы можете скачать ETHMiner 0.18.0 отсюда:   Скачать Сейчас   Скачать (зеркало)   Внутри архива вы найдете файл README.txt с инструкциями по установке.   Обязательно замените пул и адрес кошелька тем, что вы используете во всех файлах.        Журнал изменений      Восстановлена возможность автоматической настройки рабочего размера OpenCL # 1225.   Исправлен полностью сломанный сервер API # 1227.  ","categories": ["download"],
        "tags": ["ETHMiner"],
        "url": "https://ethminer.tech/download/0.18.0/",
        "teaser": "https://ethminer.tech/assets/images/thumbs/500x300.png"
      },{
        "title": "Скачать ETHMiner 0.19.0 - AMD+Nvidia GPU Miner [2021]",
        "excerpt":" Начните добывать криптовалюту   с помощью ETHMiner  \t\t \t\t\t \t\tВерсия: 0.19.0  \t\tФайл: *ETHMiner.exe,   \t\tSHA256: e6614c7572887b7426b7149bbd68765bbe3a08ae71ccfd46d13c9d652c14eb5c  \t\t(Скачать для Linux)\t \t\t \t\t \t\t \t\t \t\tСкачать сейчас(Windows x64) \t\t \t\t(зеркало) \t\t \t     The new ETHMiner stale version is ready.   Вы можете скачать ETHMiner 0.19.0 отсюда:   Скачать Сейчас   Скачать (зеркало)   Внутри архива вы найдете файл README.txt с инструкциями по установке.   Обязательно замените пул и адрес кошелька тем, что вы используете во всех файлах.        Журнал изменений      Исправлено 1843: проблема с использованием последних драйверов Nvidia в Windows решена.   Исправлено:      Коррекция интервала отображения 1606   Устранены повторяющиеся решения с stratum2 при изменении сложности.   Восстановлено правильное поведение -Pаргумента для определения имен сотрудников и адресов электронной почты.   Добавлено:      Базовая проверка подлинности API для защиты доступа к порту API в Интернете 1228.   Добавьте ispausedинформацию в ответ на miner_getstathrзапрос API 1232.   В ответах API в качестве префикса версии возвращается «ethminer-». №1300.   Автоопределение режима страты. Нет необходимости указывать stratum+tcpили stratum1+tcpилиstratum2+tcp   Ошибка подключения из-за ошибок входа (неправильный адрес или работник) помечаются как неустранимые и больше не используются   Ядро OpenCL заменено на ядро  jawawawa OpenCL с открытым исходным кодом   Добавлена  поддержка двоичных ядер jawawawa AMD.   Автоматический выбор ядра AMD. Сначала попробуйте bin, если не вернетесь к OpenCL.   API: Новый метод miner_setverbosity. №1382.   Реализован алгоритм быстрого переключения заданий на AMD, сокращающий время переключения до 1-2 миллисекунд.   Добавлена  поддержка локализации для форматирования выходных чисел.   Изменен параметр –verbosity, чтобы разрешить индивидуальное включение / отключение функций ведения журнала.   Повышена точность измерения скорости хеширования.  ","categories": ["download"],
        "tags": ["ETHMiner"],
        "url": "https://ethminer.tech/download/0.19.0/",
        "teaser": "https://ethminer.tech/assets/images/thumbs/500x300.png"
      },{
        "title": "Цифровой Рубль - Когда и Какой он будет (Простыми Словами)",
        "excerpt":"   Резкий разворот мнений центробанков о внедрении CBDC происходит прямо на наших глазах. Видимо сверху пришел приказ начать реформу.   Если в прошлом году большинство центральных банков крупных стран высказывались о том, что госкрипта не нужна, избыточна и нарушает конституцию, то в этом году даже самые упертые, включая Индию и Россию объявили о запуске национальных CBDC в следующем году.   Прототип цифрового рубля   Председатель центрального банка РФ заявила в Госдуме, что прототип цифрового рубля, скорее всего, будет запущен в начале следующего года. Далее ЦБ будет проводить испытания в течение, по крайней мере, еще 12 месяцев, чтобы увидеть, как работает CBDC. Также Эльвира Набиуллина отметила, что еще одним ключевым условием успеха цифрового рубля является обеспечение того, чтобы он не ускорял инфляцию.   Банк России хотел бы, чтобы граждане действительно добровольно предпочитали цифровой рубль наличному и безналичному, точно так же, как они стали чаще  предпочитать безналичные платежные системы и банковские карты, которые выросли в оборотах с 30% в 2014 году до 75% в третьем квартале 2021 года.   Задача, подчеркнула Набиуллина, состоит не в том, чтобы эмитировать много цифровых рублей, а в том, чтобы использовать эту новую валюту для снижения стоимости транзакций.      “Технологии теперь позволяют нам это делать. И для нас именно это будет критерием успеха, а не объём напечатанных цифровых рублей по отношению к наличным”,    -отметила она.   13 законов и кодексов   В июне центральный банк России сформировал пилотную группу по цифровому рублю с участием более десятка банков и других учреждений. Управление планирует завершить разработку прототипа платформы в декабре 2021 года и начать тестирование CBDC в январе 2022 года в ходе испытаний, которые пройдут в несколько этапов. Российские чиновники планируют внести поправки в 13 законов и кодексов, чтобы сделать оборот цифровой валюты законной.   Если запуск цифрового рубля состоится в декабре следующего года, стоит ожидать, что в течение последующего 2023 года, доля наличных сократиться на порядоки. Будут ограничены предельные суммы расчета наличными до например до 10000 рублей в месяц и не более 2 тыс рублей на разовую покупку.   Затем естественно, совершение более крупных покупок будет разрешено только в цифровом рубле, поскольку государству будет так проще производить налоговое администрирование. Ну и конечно, установить себе на смартфон кошелек для использования цифровым рублём будет невозможно без QR-кода. Нет QR-кода, пользуйтесь наличными, но с ограничениями на разовую покупку.   Это мое предположение, в котором я лично уверен полностью. Вернемся к этой заметке в 2023 году, чтобы проверить будет ли всё так, как я предполагаю. Хотя уверен, будет еще хуже.   Единственное, что нас может спасти, это национальное разгильдяйство и некомпетентность чиновников, которые приведут к затягиванию сроков внедрения этого цифрового ошейника на годы, как у нас это обычно бывает в 100% случаев.  ","categories": ["articles"],
        "tags": [],
        "url": "https://ethminer.tech/ru/articles/gazz-11-18/",
        "teaser": "https://ethminer.tech/assets/images/thumbs/500x300.png"
      },{
        "title": "Gemini биржа и токенизированные активы - привлекла 400 миллионов долларов",
        "excerpt":"   Gemini, регулируемая криптовалютная биржа, основанная близнецами Винклвосс, привлекла 400 миллионов долларов последнем раунде  Этот финансовый раунд поднял оценку биржи до $7,1 млрд, сделав ее одной из самых крупных  бирж в крипто-мире.   В этом финансовом раунде, возглавляемом фонлом Морган Крик, также приняли участие ключевые лидеры венчурной отрасли.   Самое интересное; что близнецы Винклвосс собрались вкладывать привлечённых средства в развитие альтернативных приложений для  метавселенной.   По иронии судьбы, их пути опять пересеклись с Марком Цукербергом. В первый раз, за их деньги Цукерберг построил крупнейшую в мире соцсеть. Сейчас, похоже, Винкловоссы профинансирует приложения для метавселенной Цукерберга.   Еще важные новости   Добавим к этой новости ещё одну   Kucoin Labs, исследовательское и инвестиционное подразделение криптовалютной биржи Kucoin, запустило фонд в размере $100 млн для инкубации ранних проектов, связанных с метавселенной.   К ним относятся, в частности, игровые стартапы на блокчейне, платформы NFT и децентрализованные платформы. Поддержка также будет включать непосредственное участие в выбранных проектах, включая консультации по брендингу и маркетингу.   Помните мы гадали, что будет следующим хайпом в крипте после ICO, IDEFI и NFT   Вот вам ответ - это проекты, связывающие крипту и метавселенную Марка Цукерберга.   Сейчас вложение в любой токен стартапа, связанного с темой метавселенной, даст сотни иксов, если не окажется скамом.  ","categories": ["articles"],
        "tags": [],
        "url": "https://ethminer.tech/ru/articles/gemini-11-24/",
        "teaser": "https://ethminer.tech/assets/images/thumbs/500x300.png"
      },]
