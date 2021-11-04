var store = [{
        "title": "NBMiner&#58; Command Line Arguments and Options",
        "excerpt":"**       Download   Download here   CMD options：   nbminer -a algo -o protocol+socket_type://pool_host:pool_port -u wallet_address.worker:passwd      -h, --help    Displays this help.   -v, --version    Displays version information.   -c, --config \\&lt;config file path&gt;    Use json format config file rather than cmd line options.   -a, --algo \\&lt;algo&gt;    Select mining algorithm   --api  \\&lt;host:port&gt;    The endpoint for serving REST API.   -o, –url &lt;url&gt;    Mining pool url.   -u, –user &lt;user&gt;    User used in Mining pool, wallet address or username.   -o1, –url1 &lt;url&gt; url for backup mining pool 1.   -u1, –user1 &lt;user&gt; username for backup mining pool 1.   -o2, –url2 &lt;url&gt; url for backup mining pool 2.   -u2, –user2 &lt;user&gt; username for backup mining pool 2.   -p,  –password &lt;password&gt;  password for mining pool   -p1,  –password1 &lt;password&gt;  password for backup mining pool1   -p2,  –password2 &lt;password&gt;  password for backup mining pool2   -di, –secondary-intensity &lt;intensity&gt;    The relative intensity when dual mining.   -do, –secondary-url &lt;url&gt;    ETH mining pool when dual mining.   -du, –secondary-user &lt;user&gt;    ETH username when dual mining.   -do1, –secondary-url1 &lt;url&gt;    Backup 1 ETH mining pool when dual mining.   -du1, –secondary-user1 &lt;user&gt;    Backup 1 ETH username when dual mining.   -do2, –secondary-url2 &lt;url&gt;    Backup 2 ETH mining pool when dual mining.   -du2, –secondary-user2 &lt;user&gt;    Backup 2 ETH username when dual mining.   -d, –devices &lt;devices&gt;    Specify GPU list to use. Format: “-d 0,1,2,3” to use first 4 GPU.   -i, –intensity &lt;intensities&gt;    Comma-separated list of intensities (1 -100).   –strict-ssl    Check validity of certificate when use SSL connection.   –proxy    Socks5 proxy used to eastablish connection with pool, E.g. 127.0.0.1:1080   –cuckoo-intensity &lt;intensity&gt;    Set intensity of cuckoo, cuckaroo, cuckatoo, [1, 12]. Smaller value means higher CPU usage to gain more hashrate. Set to 0 means autumatically adapt. Default: 0.   –cuckatoo-power-optimize    Set this option to reduce the range of power consumed by rig when minining with algo cuckatoo. This feature can reduce the chance of power supply shutdown caused by overpowered. Warning: Setting this option may cause drop on minining performance.   –temperature-limit, –tl &lt;temp-limit&gt;    Set temperature limit of GPU, if exceeds, stop GPU.   –temperature-start, –ts &lt;temp-start&gt;    Set cool-down temperature target if GPU is stopped by temperature-limit, default to &lt;temp-limit&gt; - 5.   –log    Generate log file named logs/log_&lt;timestamp&gt;.txt.   –log-file &lt;filename&gt;    Generate custom log file. Note: This option will override --log.   –no-nvml    Do not query cuda device health status.   –fidelity-timeframe &lt;timeframe&gt;    Set timeframe for the calculation of fidelity, unit in hour. Default: 24.   –long-format    Use ‘yyyy-MM-dd HH:mm:ss,zzz’ for log time format.   –verbose    Print communication data between miner and pool in log file.   –device-info    Print device cuda information.   –fee &lt;fee&gt;    Change devfee in percentage, [0-5]. Set to ‘0’ to turn off devfee with lower hashrate. Otherwise, devfee = max(set_value, def_value).   –generate-config &lt;filename&gt;    Generate a sample config json file.   –no-watchdog    Disable watchdog process.   –platform &lt;platform&gt;    Choose platform，0: NVIDIA+AMD (default), 1: NVIDIA only, 2: AMD only   –share-check &lt;value&gt;    If &lt;value&gt; minutes without share, reboot miner, set 0 to disable. Default: 30   –no-interrupt    set this option will disable miner interrupting current GPU jobs when a new job coming from pool, will cause less power supply issue, but might lead to a bit higher stale ratio and reject shares.   –enable-igpu    AMD igpu is disabled by default, set this option to enable.   –mt, –memory-tweak &lt;mode&gt;    Memory timings optimize for Nvidia GDDR5 &amp; GDDR5X gpus. range [1-6]. Higher value equals higher hashrate. Individual value can be set via comma seperated list. Power limit may need to be tuned up to get more hashrate. Higher reject share ratio can happen if mining rig hits high temperature, set lower value of -mt can reduce reject ratio. Under windows, a custom driver need to be installed when using -mt, can installed manually by option  --driver, or run nbminer.exe with admin privilege to perform auto-install. Under linux, admin priviledge is needed to run, sudo ./nbminer -mt x. OhGodAnETHlargementPill is not needed anymore if -mt is enabled when mining on 1080 &amp; 1080ti GPUs.   **–driver &lt;action&gt;    Windows only option, install / uninstall driver for memory tweak. Run with admin priviledge. install: nbminer.exe --driver install, uninstall: nbminer.exe --driver uninstall. **   API Reference   Web Monitor   Open http://api_host:port/ in your browser to use web monitor.   Request   GET http://api_host:port/api/v1/status   Response   {     \"miner\": {         \"devices\": [             {                 \"accepted_shares\": 2,                 \"accepted_shares2\": 0,                 \"core_clock\": 1620,                 \"core_utilization\": 100,                 \"fan\": 47,                 \"fidelity1\": 5.859799716605649,                 \"fidelity2\": 0,                 \"hashrate\": \"217.1 M\",                 \"hashrate2\": \"36.19 M\",                 \"hashrate2_raw\": 36190716.266428046,                 \"hashrate_raw\": 217144297.59856823,                 \"id\": 0,                 \"info\": \"GeForce RTX 2070\",                 \"mem_clock\": 6801,                 \"mem_utilization\": 86,                 \"pci_bus_id\": 1,                 \"power\": 188,                 \"rejected_shares\": 0,                 \"rejected_shares2\": 0,                 \"temperature\": 72             },             {                 \"accepted_shares\": 0,                 \"accepted_shares2\": 0,                 \"core_clock\": 1607,                 \"core_utilization\": 100,                 \"fan\": 0,                 \"fidelity1\": 0,                 \"fidelity2\": 0,                 \"hashrate\": \"168.5 M\",                 \"hashrate2\": \"42.11 M\",                 \"hashrate2_raw\": 42113955.19774488,                 \"hashrate_raw\": 168455820.79097953,                 \"id\": 1,                 \"info\": \"P102-100\",                 \"mem_clock\": 5508,                 \"mem_utilization\": 100,                 \"pci_bus_id\": 4,                 \"power\": 232,                 \"rejected_shares\": 0,                 \"rejected_shares2\": 0,                 \"temperature\": 57             }         ],         \"total_hashrate\": \"708 M\",         \"total_hashrate2\": \"164.4 M\",         \"total_hashrate2_raw\": 164395439.13815895,         \"total_hashrate_raw\": 708044466.8349969,         \"total_power_consume\": 839     },     \"reboot_times\": 0,     \"start_time\": 1586944619,     \"stratum\": {         \"accepted_shares\": 2,         \"accepted_shares2\": 0,         \"algorithm\": \"hns_ethash\",         \"difficulty\": \"8.59 G\",         \"difficulty2\": \"8.59 G\",         \"dual_mine\": true,         \"latency\": 221,         \"latency2\": 0,         \"rejected_shares\": 0,         \"rejected_shares2\": 0,         \"url\": \"handshake.hk.nicehash.com:3384\",         \"url2\": \"daggerhashimoto.hk.nicehash.com:3353\",         \"use_ssl\": false,         \"use_ssl2\": false,         \"user\": \"3QHNv52ahdCyeYTGVYDPGjRzMpkknjjfAf.test\",         \"user2\": \"3QHNv52ahdCyeYTGVYDPGjRzMpkknjjfAf.test\"     },     \"version\": \"30.0\" }  ","categories": ["documentation"],
        "tags": ["NBMiner"],
        "url": "https://ethminer.tech/documentation/arguments/",
        "teaser": "https://ethminer.tech/assets/images/thumbs/500x300.png"
      },{
        "title": "NBMiner&#58; changelog",
        "excerpt":"**    Changelog   v37.5(2021-05-21)   changes from 37.3      new algo: ergo for AMD GPU, can be faster with ETH mining timings   optimize: ergo slightly improce hashrate on Nvidia GPUs   feature: use --temperature-limit &amp; --temperature-start to protect GPU from overheat, detail in readme.md   v37.3(2021-05-06)      feature: add option --enable-dag-cache to allow an extra DAG for different epoch cached in GPU memory, useful for ETH+ZIL mining and mining on NiceHash.   v37.2(2021-04-24)      feature: add option -p -p1 -p2 for setting password of mining pool, old format -u wallet.worker:passwd is disabled，: can be added as part of worker or wallet   optimize: ethash minor hashrate improvement on RDNA GPUs   fix: compatibility issue on lasted AMD 21.4.1 driver.   v37.1(2021-03-25)      fix: ergo high reject ratio on 10 series Nvidia GPUs   fix: ergo pool compatibility   Recommend miners with p106-90 &amp; 1060 3G to mine ERGO, hashrate will be increased significantly with -mt option.   v37.0(2021-03-19)      new algo: ergo for mining ERGO coin on Nvidia GPUs.   delete algo: bfc cuckarood for Nvidia, octopus for AMD   fix: octopus support CFX new address format   fix: ‘clBuildProgram error’ issue on Vega for versions 35.0 - 36.1   feature: disable AMD iGPU by default, can be enabled back by setting --enable-igpu   other: minor bug fix, improve overall stability   v36.1(2021-01-11)      optimize: octopus Lower power comsumption for 20、30 series Nvidia GPU, improve hashrate 2% on 16 series Nvidia GPU   fix: ethash Fix performance  degradation  under win8 &amp; win8.1 for Nvidia 10 series GPUs.   fix: ethash Slightly reduce stale ratio.   fix: A random crash bug fix, improve overall stability   feature: Add detail datetime &amp; cpu usage in summary log   feature: ethash If DAG verification failed, display corresponding GPU name in red in summary.   v36.0(2020-12-28)      fix: kawpow crash on some GPUs in versions 35.x   fix: ethash performance  degradation  under win7 for Nvidia 10 series GPUs.   delete algo: eaglesong, eaglesong_ethash, trb, trb_ethash, hns, hns_ethash, sipc, cuckaroo, cuckaroo_swap   feature: smaller binary size   v35.2(2020-12-22)   Compared to v35.0      optimize: ethash More stable under high OC for Nvidia 16、20、30 series GPUs.   optimize: octopus Improve hashrate 1-3% for 16, 20, 30 Nvidia GPUs   feature: ethash DAG verification after creation, if miner showed log in red font: Verification failed, invalid 2.0%, please consider lower GPU overclock   v35.1(2020-12-21)      optimize: ethash More stable under high OC for Nvidia GPUs   optimize: octopus Improve hashrate 1-3% for 16, 20, 30 Nvidia GPUs   v35.0(2020-12-14)      feature: ethash Add statistics for invalid shares, in cmd log, api and web monitor.   feature: Turn off limitation for not allowing to run under Virtual Machine.   feature: Add statistics for Health information of AMD GPU   fix: More detail error information of OpenCL api   fix: Reduce CPU usage.   v34.5(2020-12-05)      optimize: ethash Improve hashrate 1% on certain Nvidia GPUs   optimize: octopus Minor improvement on certain 20 &amp; 30 series Nvidia GPUs   feature: -mt More effective and compatibility on Geforce Pascal GPUs   fix: kawpow progpow_sero Fix crash on certain AMD &amp; Nvidia rigs   v34.4(2020-12-02)      optimize: octopus Improve hashrate 1-5% on Nvidia 16, 20, 30 series GPUs, 29.2M on 1660s   v34.3(2020-12-01)      fix: etchash error on swiching epoch, ETC miners should upgrade to this version.   fix: support for AMD 20.11.x driver version   fix: ethash more stable hashrate under windows   v34.2(2020-11-29)      fix: ethash Reduce stale share ratio.   v34.1(2020-11-28)      fix: ethash Fix display hashrate only half of normal hashrate on certain windows rigs.   v34.0(2020-11-28)      optimize: ethash Improve hashrate on Nvidia 10 series GPUs，3% higher hashrate under same PowerLimit, or same hashrate with 5%-10% lower PowerLimit.   v33.8(2020-11-25)      feature: octopusAdd support for mining on NiceHash   v33.7(2020-11-23)      feature: Add an option -no-interrupt, set this option will disable miner interrupting current GPU jobs when a new job coming from pool, will cause less power supply issue, but might lead to a bit higher stale ratio and reject shares.   feature: Add effiecieny display in console, showing hashrate per watt for each GPU   feature: Add 10min 4h 24h pool hashrate display in web monitor.   v33.6(2020-11-21)      optimize: octopus improve hashrate: +10% on 16 20 30 series Nvidia GPUs, 27.5M on 1660s.   note: octopus From this version, GPUs that has higher core performance than memory performance, need to overclock memory to get higher hashrate, e.g. 2080 3070   33.5(2020-11-21)      optimize: octopus improve hashrate: +90% on 16 20 30 series Nvidia GPUs, at least +100%  on all other GPUs   v33.4(2020-11-12)      optimize: octopus improve hashrate: +35% on 16 20 30 series Nvidia GPUs, +20% on all other GPUs   new algo: etchash for upcoming ETC upgrade   feature: add effective pool hashrate on console &amp; api, 10min 4h 24h.   v33.3(2020-11-04)      optimize: octopus improve hashrate: Nvidia, +3% on 10 series, +20% on 16, 20, 30 series   new algo: octopus for AMD support.   fix: crash upon start on certain Nvidia rigs.   v33.2(2020-11-01)      optimize: octopus improve hashrate: +150% on 10 series, +80% on 16, 20, 30 series   fix: --share-check 0 cause high CPU usage   fix: Added back Uptime in console summary   v33.1(2020-10-29)      fix: some format error on console print   optimize: octopus lower CPU usage   feature: add new option --share-check, if no share found in a set period of time, miner will reboot. default to 30 minutes. SOLO miners should set this option to 0 to turn off check.   v33.0(2020-10-28)      new algo: octopus for miningconflux，support both solo mining and pool mining, need Nvidia GPU above 6G   optimize: ethash improve performance on Vega &amp; Navi GPUs   optimize: beamv3 improve performance on high end 10xx Nvidia GPUs   feature: modify summary output on console, add share statistics for each GPU.   fix: ethash fix zero hashrate on certain cases for AMD GPUs   v32.1(2020-10-05)      bug fix: Fix AMD device initialization failure on some rigs.   v32.0(2020-09-30)      new algo: beamv3 for mining BEAM with Nvidia 3GB+ GPUs   new algo: cuckatoo32 add support for Nvidia 6GB GPU   optimize: ethash for AMD RX 4xx, 5xx, Vega series 8GB+ GPUs   feature: ethash support mining up to epoch 800   v31.1(2020-06-24)      new algo: cuckatoo32  for Grin32 on Nvidia 8G above GPUs   kawpow: support for NiceHash’s extranonce.subscribe protocol   v30.2(2020-05-05)      windows: Auto install driver if --memory-tweak is set and driver is not installed.   windows: Fix driver install failed issue on some windows rigs.   kawpow: Fix duplicate share issue on some pools.   v30.1(2020-05-03)      Reduce ethash kawpow startup time.   Fix a possible crash on certain rigs of reason invalid kernel image.   Do not apply memory tweak if -mt is set to 0 on corresponding gpu.   Print system information on start.   v30.0(2020-04-30)      Add option --memory-tweak , optimize memory timings of Nvidia GD5 &amp; GD5X GPUs. Detail describe can be found in readme.md   Add option --verbose, print pool communucation log.   Add option --proxy, user can using socks5 proxy to set up connection with pool.   Add number of shares per GPU in both log print and api.   Minor bug fix and improvements.   v29.1(2020-04-09)      Fix low hashrate of kawpow on AMD RDNA GPU.   Improve kawpow hashrate on AMD GPU.   v29.0(2020-04-03)      Add support for RVN new algo kawpow mining on Nvidia &amp; AMD gpus.   v28.1(2020-03-30)      Support HNS &amp; HNS+ETH mining on NiceHash   v28.0(2020-03-28)      Add support for mining TRB &amp; TRB+ETH on Nvidia GPU   Add support for mining ETH on miningrigrentals.   Minor improvements and fixes.   v27.7(2020-03-15)      Fix ETH mining on NiceHash   Fix NVML initialization failure on certain cases.   v27.6(2020-03-14)      Improve HNS &amp; HNS+ETH on Nvidia GPU.   v27.5(2020-03-05)      Fix high ETH reject rate on certain pools when mining HNS+ETH   Slightly improve mining HNS+ETH on Nvidia GPU.   v27.4(2020-02-28)      Fix support the certain AMD Vega GPUs.   Fix a potential bug when mining under AMD+Nvidia mixed rig.   v27.3(2020-02-27)      Add HNS+ETH mining on AMD GPU   Improve HNS+ETH performance on Nvidia GPU   Note: -di calculation is changed in this version for HNS+ETH.            The value of -di  = work_size_of_hns / work_size_of_eth       E.g, -di 5  on a stock freq 1070ti will get 26M for eth &amp; 130M for hns.           v27.2(2020-02-20)      Improve HNS performance on AMD GPU   v27.1(2020-02-19)      Improve HNS performance on Nvidia GPU   Add support for HNS mining for AMD GPU   v27.0(2020-02-18)      Add support for HNS &amp; HNS_ETH mining for NVIDIA GPU   Minor bug fix and improvements.   v26.2(2019-11-21)      Improve CKB+ETH performance on AMD GPU.   Fix bug of 26.1: Launch crash on certain AMD rigs.   v26.1(2019-11-15)      Add support for mining CKB+ETH on AMD GPU.   Improve performance for mining CKB on Nvidia GPU.   v26.0(2019-10-11)      Add support for BFC mininig on Nvidia GPU.   Fix CKB compatibility on AMD GPU.   Fix cuckcoocycle on nicehash.   v25.5(2019-10-05)      Fix a bug when mining CKB+ETH.   Fix a compatibility issue in CKB stratum protocol.   v25.4(2019-10-04)      Improve CKB mining performance on both NVIDIA &amp; AMD cards.   Improve CKB+ETH performance on NVIDIA cards.   Add support for mining SERO on AMD cards.   Add a new option --platform to allow users to choose GPU platform.   v25.2(2019-09-10)      Add support for CKB mining on AMD cards under linux.   Bug fix.   v25.1(2019-09-07)      Add support for CKB mining on AMD cards.   v25.0(2019-09-05)      Add support for CKB mining &amp; CKB+ETH dual mining.   Enhance -di parameter to support comma separated list to specify -di value for each card.   The default value of -di for CKB+ETH mining ranges from 4 ~ 8 depending on GPU model, valid value range in [1, 10], higher value means higher intensity for ETH.   The best value of -di differs by GPU model, overclock and power limitation.   v24.4(2019-08-16)      Fix SIPC dxpool compatibility.   1080 &amp; 1080ti  users should use OhGodAnETHlargementPill to boost SIPC performance.   v24.3(2019-08-15)      Add support for mining SIPC.   Fix high CPU usage mining SERO with 24.1 &amp; 24.2   Fix Grin intensity.   v24.2(2019-07-17)      Disable the auto-switch from cuckaroo -&gt; cuckarood   Slightliy improve RTX2060 Grin29 performance under win10   Fix startup stuck issue on some linux distro.   Add new option --generate-config to generate a sample config file.   Note: Linux sero mining need to set a env before start if run with –no-watchdog, please check start_sero.sh   v24.1(2019-07-16)      Fix lower hashrate than previous version for Grin29 &amp; AE on 10xx 6GB cards   Fix mining Grin29 AE on Turing 6GB Cards on Win10.   Fix the disfunction of auto-reboot when GPU error happens.   Fix start using json config file.   Change the GPU MEM size display upon launch from Total Size to Available Size.   v24.0(2019-07-15)      Support Grin29 fork on 17th, July.            When using algo cuckaroo, v24.0 will do an automatically switch to cuckarood on height 262080.       Add a temporary option -grin29-fork-height, user can test the auto-switch by setting this option to lower height value.           Improve performance on Grin29 &amp; AE.   Add support for mining SERO, algo progpow_sero.   Add option -intensity to set the intensity level for each GPU.   Add option -fidelity-timeframe to customize the timeframe for fidelity calculation.   Add option -log-file to set a specified log filename.   Add option -no-nvml to close the periodical query for GPU status.   Add new method to turn on NiceHash protocol, nicehash+tcp://            Also compatible with previous url based method.           Minor improvement and bug fix.   v23.3(2019-06-14)      Fix mining AE (cuckoocycle) on NiceHash.   Add option to set a temperature limit on GPU.   v23.2(2019-05-09)      Improve Grin &amp; AE &amp; SWAP performance.   Add support for mining AE on NiceHash.   Add display output of Fidelity.   Minor improvement and bug fix.   v22.2(2019-04-15)      Improve compatiblity for mining Grin31 on windows 8GB cards.   Set default --cuckoo-intensity to 4, lower CPU usage on default settings when mining Grin &amp; AE.   v22.1(2019-04-12)      Add support for mining Swap (XWP).   Improve Grin29 &amp; AE performance.   Improve Windows compatibility on Grin &amp; AE, significant boost on performance.   v21.4(2019-04-03)      Improve Grin31 performance.   Improve performance of Grin29 &amp; AE on RTX cards.   Fix Grin31 compatibility on Win7 with 8G cards.   New option to reduce the range of power consumption by multi-gpu rig.   Add miner Up Time print in cmd outputs.   v21.3(2019-03-20)      Fix bug: Occasionlly lower local hashrate than previously version.   Do not run GPU if mining pool not connected when mining Grin &amp; AE.   v21.2(2019-03-15)      Fix bug: \"GPU hung detected\" happens under some normal conditions.   v21.1(2019-03-14)      Improve Grin29 performance   Add support for mining Grin &amp; AE on Turing cards.   Add detection for GPU hung.   Increase chance of accept share when mining Grin on NiceHash.   Fix ETH mining on NiceHash.   Fix “accecpt share checking” bug  when using backup mining pools.   v21.0(2019-03-06)      Add support for AE (Aeternity)   Improve performance on Grin29 &amp; Grin31   Improve miner stability.   v20.0(2019-02-21)      Add support for Grin31   Add support for mining Grin on NiceHash   Add new option to tune CPU usage when mining Grin.   Improve BTM+ETH performance on RTX cards.   FIx bug of lower hashrate when mining BTM on rigs with mixed 10 series and 20 series cards.   Do not add a default worker name if no worker name specified by user.   v14.0(2019-01-30)      BTM mining, improve over 200% on RTX cards.   Improve Grin mining.   v13.2(2019-01-17)      Add support mining Grin on 1066-win10.   Fix support for Solo mining using grin-server.   v13.1(2019-01-15)      Add support for mining Grin coin (cuckaroo29).   Minor bug fix and improvement.   v12.4(2018-01-05)      Improve hashrate of BTM+ETH dual mining about 6%.   v12.3(2018-12-30)      Fix a bug that could cause many reject shares when epoch changes under ETH dual mining .   v12.2(2018-12-26)      Fix high stale share and reject share ratio when use big -di for dual mining BTM+ETH.   Fix the support of web monitor for dual mining.   Minor bug fixs and improvements.   v12.1(2018-12-24)      Fix support ETH PPS+ mode on F2pool   Add support for ETH on NiceHash (with protocol header ethnh)   Fix rest api when dual mining.   Minor bug fixs.   v12.0(2018-12-19)      New BTM+ETH dual mining mode.   Decrease the required driver version to 377.   Temporarily remove support for XMR mining.   Fix start using config file.   Add a default protocol header if not specified.   v11.0(2018-12-12)      Improve BTM hashrate.   Add support for ETH and XMR mining.   Optimize handle for new job, increase profit on mining pool.   Colorful output on console.   Add support for backup mining pools.   Decrease dev fee of BTM to 2%.   v10.0(2018-10-03)      Improve hashrate   v9.0(2018-08-28)      Improve hashrate ~30%   Improve stability   v8.0(2018-08-17)      Improve hashrate 10% - 15%   Lower skipped share rate, increase actual hashrate on mining pool.   Added display for mining pool latency.   Added display for mining pool difficulty.   Improve API web monitor.  ","categories": ["documentation"],
        "tags": ["nbminer"],
        "url": "https://ethminer.tech/documentation/changelog/",
        "teaser": "https://ethminer.tech/assets/images/thumbs/500x300.png"
      },{
        "title": "NBMiner Setup Guide [2021]",
        "excerpt":"You can use this list as a reference for all Launch Parameters supported by NBMiner.    Download   Download here   Sample Usages   Edit the bat file like this:   Ethereum (ETH)   ethermine:  nbminer -a ethash -o ethproxy+tcp://asia1.ethermine.org:4444 -u 0x12343bdgf.worker   sparkpool:  nbminer -a ethash -o ethproxy+tcp://cn.sparkpool.com:3333 -u 0x12343bdgf.worker   f2pool:  nbminer -a ethash -o ethproxy+tcp://eth.f2pool.com:8008 -u 0x12343bdgf.worker   beepool:  nbminer -a ethash -o ethproxy+tcp://eth-pool.beepool.org:9530 -u 0x12343bdgf.worker   nanopool:  nbminer -a ethash -o ethproxy+tcp://eth-asia1.nanopool.org:9999 -u 0x12343bdgf.worker   herominers:  nbminer -a ethash -o ethproxy+tcp://ethereum.herominers.com:10201 -u 0x12343bdgf.worker   nicehash:  nbminer -a ethash -o nicehash+tcp://daggerhashimoto.eu.nicehash.com:3353 -u btc_address.worker   Customize NBMiner for Maximum Profit! Read the full guide to configuring NBMiner   ETH+ZIL   ezil:  nbminer -a ethash -o stratum+tcp://cn.ezil.me:5555 -u ETH_WALLET.ZIL_WALLET.WORKER --enable-dag-cache   shardpool:  nbminer -a ethash -o stratum+tcp://ch1-zil.shardpool.io:3333 -u ETH_WALLET.WORKER -p ZIL_WALLET@cn.sparkpool.com:3333 -enable-dag-cache   Grin32   goblinpool:  nbminer -a cuckatoo32 -o stratum+tcp://grin32.goblinpool.com:3344 -u username.worker:passwd   f2pool:  nbminer -a cuckatoo32 -o stratum+tcp://grin32.f2pool.com:13654 -u username.worker:passwd   herominers:  nbminer -a cuckatoo32 -o stratum+tcp://grin.herominers.com:10301 -u username.worker:passwd   nicehash:  nbminer -a cuckatoo32 -o nicehash+tcp://grincuckatoo32.hk.nicehash.com:3383 -u btc_address.worker   AE   f2pool:  nbminer -a cuckoo_ae -o stratum+tcp://ae.f2pool.com:7898 -u ak_xxxxxxx.worker:passwd   beepool:  nbminer -a cuckoo_ae -o stratum+tcp://ae-pool.beepool.org:9505 -u ak_xxxx.worker:passwd   nicehash:  nbminer -a cuckoo_ae -o nicehash+tcp://cuckoocycle.eu.nicehash.com:3376 -u btc_address.test   SERO   beepool:  nbminer -a progpow_sero -o stratum+tcp://sero-pool.beepool.org:9515 -u wallet_address.worker:pswd   f2pool:  nbminer -a progpow_sero -o stratum+tcp//sero.f2pool.com:4200 -u wallet_address.worker:pswd   RVN   beepool:  nbminer -a kawpow -o  stratum+tcp://rvn-pool.beepool.org:9531 -u wallet.worker:passwd   f2pool:  nbminer -a kawpow -o  stratum+tcp://raven.f2pool.com:3636 -u wallet.worker:passwd   minermore:  nbminer -a kawpow -o stratum+tcp://us.rvn.minermore.com:4501 -u wallet.worker:paswd   bsod:  nbminer -a kawpow -o stratum+tcp://pool.bsod.pw:2640 -u wallet.worker:passwd   woolypooly:  nbminer -a kawpow -o stratum+tcp://rvn.woolypooly.com:55555 -u wallet.worker:passwd   BEAM   sparkpool:  nbminer -a beamv3 -o stratum+ssl://beam.sparkpool.com:2222 -u wallet.worker:passwd   beepool:  nbminer -a beamv3 -o stratum+ssl://beam-pool.beepool.org:9507 -u wallet.worker:passwd   leafpool:  nbminer -a beamv3 -o stratum+ssl://beam-eu.leafpool.com:3333 -u wallet.worker:passwd   herominers:  nbminer -a beamv3 -o stratum+ssl://beam.herominers.com:10231 -u wallet.worker:passwd   nicehash:  nbminer -a beamv3 -o stratum+tcp://beamv3.eu.nicehash.com:3387 -u btc_address.worker   CONFLUX   beepool:  nbminer -a octopus -o stratum+tcp://cfx-pool.beepool.org:9555 -u wallet.worker   poolflare:  nbminer -a octopus -o stratum+tcp://cfx.ss.poolflare.com:3366 -u wallet.worker   f2pool:  nbminer -a octopus -o stratum+tcp://cfx.f2pool.com:6800 -u username.worker   woolypooly:  nbminer -a octopus -o  stratum+tcp://cfx.woolypooly.com:3094 -u wallet.worker   nicehash:  nbminer -a octopus -o stratum+tcp://octopus.eu.nicehash.com:3389 -u btc_address.worker   ERGO   herominers:  nbminer -a ergo -o stratum+tcp://ergo.herominers.com:10250 -u wallet.worker   woolypooly:  nbminer -a ergo -o stratum+tcp://erg.woolypooly.com:3100 -u wallet.worker   nanopool:  nbminer -a ergo -o stratum+tcp://ergo-eu1.nanopool.org:11111 -u wallet.worker   666pool:  nbminer -a ergo -o stratum+tcp://ergo.666pool.cn:9556 -u wallet.worker  ","categories": ["documentation"],
        "tags": ["NBMiner"],
        "url": "https://ethminer.tech/documentation/setup/",
        "teaser": "https://ethminer.tech/assets/images/thumbs/500x300.png"
      },{
        "title": "Download the latest version NBMiner (39.7) - [2021]",
        "excerpt":" Get started with NBMiner  \t\t \t\t\t \t\tLatest version is 39.7 \t\tSHA256: 0a9f89cb87a8ba383d970ec3bd314ac339c0e872c4db44c7f7e7ee32403aa3c6 *NBMiner39.7.exe \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new NBMiner stable version is ready.   You can download NBMiner 39.7 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.   Supported coins    Cryptocurrencies  \t \t\t \t\t\t# \t\t\tName \t\t\tAlgorithm \t\t \t\t \t\t\t1 \t\t\tAKA Akroma \t\t\tEthash \t\t \t\t \t\t\t2 \t\t\t RVN  \t\t\tKAWPOW \t\t \t\t \t\t\t3 \t\t\tATH Atheios \t\t\tEthash \t\t \t\t \t\t\t4 \t\t\tBEAM Beam \t\t\tBeamHashlll \t\t \t\t \t\t\t5 \t\t\t CFX  \t\t\tOctopus \t\t \t\t \t\t\t6 \t\t\t ETC  \t\t\tEtchash \t\t \t\t \t\t\t7 \t\t\t ETH  \t\t\tEthash \t\t \t\t \t\t\t8 \t\t\t RVN  \t\t\tKAWPOW \t\t \t\t \t\t\t9 \t\t\t SERO  \t\t\tProgPowSERO \t\t \t\t \t\t\t10 \t\t\tBINANCE ETH Binance \t\t\tEthash \t\t \t\t \t\t\t11 \t\t\tBTM Bytom \t\t\tTensority \t\t \t\t \t\t\t12 \t\t\tCFX Conflux \t\t\tOctopus \t\t \t\t \t\t\t13 \t\t\tCLO Callisto Network \t\t\tEthash \t\t \t\t \t\t\t14 \t\t\tDBIX \t\t\tEthash \t\t \t\t \t\t\t15 \t\t\tEGEM EtherGem \t\t\tEthash \t\t \t\t \t\t\t16 \t\t\tERE \t\t\tEthash \t\t \t\t \t\t\t17 \t\t\tERG Ergo \t\t\tAutolykos2 \t\t \t\t \t\t\t18 \t\t\tESN Escudo Navacense \t\t\tEthash \t\t \t\t \t\t\t19 \t\t\tETC Ethereum Classic \t\t\tEtchash \t\t \t\t \t\t\t20 \t\t\tETH Ethereum \t\t\tEthash \t\t \t\t \t\t\t21 \t\t\tETHO Etho Protocol \t\t\tEthash \t\t \t\t \t\t\t22 \t\t\tETP Metaverse ETP \t\t\tEthash \t\t \t\t \t\t\t23 \t\t\tEXP Expanse \t\t\tEthash \t\t \t\t \t\t\t24 \t\t\tE2IL ETC Ezil \t\t\tEtchash \t\t \t\t \t\t\t25 \t\t\tE2IL ETH Ezil \t\t\tEthash \t\t \t\t \t\t\t26 \t\t\t BEAM  \t\t\tBeamHashlll \t\t \t\t \t\t\t27 \t\t\t CFX  \t\t\tOctopus \t\t \t\t \t\t\t28 \t\t\t ETC  \t\t\tEtchash \t\t \t\t \t\t\t29 \t\t\t ETH  \t\t\tEthash \t\t \t\t \t\t\t30 \t\t\t RVN  \t\t\tKAWPOW \t\t \t\t \t\t\t31 \t\t\t SERO  \t\t\tProgPowSERO \t\t \t\t \t\t\t32 \t\t\t ETH  \t\t\tEthash \t\t \t\t \t\t\t33 \t\t\tGRIN Grin \t\t\tcuckAToo32 \t\t \t\t \t\t\t34 \t\t\tHIVEON ETC Hiveon \t\t\tEtchash \t\t \t\t \t\t\t35 \t\t\tHIVEON ETH Hiveon \t\t\tEthash \t\t \t\t \t\t\t36 \t\t\tHVN \t\t\tKAWPOW \t\t \t\t \t\t\t37 \t\t\tMD KAWPOW Mining Dutch \t\t\tKAWPOW \t\t \t\t \t\t\t38 \t\t\tMO Ethash MoneroOcean \t\t\tEthash \t\t \t\t \t\t\t39 \t\t\tMO AC MOAC \t\t\tEthash \t\t \t\t \t\t\t40 \t\t\tMPH Etchash  \t\t\tEtchash \t\t \t\t \t\t\t41 \t\t\tMPH Ethash  \t\t\tEthash \t\t \t\t \t\t\t42 \t\t\tMPH KAWPOW  \t\t\tKAWPOW \t\t \t\t \t\t\t43 \t\t\tMRR BeamHashlll  \t\t\tBeamHashlll \t\t \t\t \t\t\t44 \t\t\tMRRcuckAToo31  \t\t\tcuckAToo31 \t\t \t\t \t\t\t45 \t\t\tMRR Etchash  \t\t\tEtchash \t\t \t\t \t\t\t46 \t\t\tMRR Ethash  \t\t\tEthash \t\t \t\t \t\t\t47 \t\t\tMRR Tensority  \t\t\tTensority \t\t \t\t \t\t\t48 \t\t\tMWC Mimble Wimble Coin \t\t\tcuckAToo31 \t\t \t\t \t\t\t49 \t\t\tCFX  \t\t\tOctopus \t\t \t\t \t\t\t50 \t\t\t ERG  \t\t\tAutolykos2 \t\t \t\t \t\t\t51 \t\t\t ETC  \t\t\tEtchash \t\t \t\t \t\t\t52 \t\t\t ETH  \t\t\tEthash \t\t \t\t \t\t\t53 \t\t\tRVN  \t\t\tKAWPOW \t\t \t\t \t\t\t54 \t\t\tNH Autolykos2 NiceHash \t\t\tAutolykos2 \t\t \t\t \t\t\t55 \t\t\tNH BeamHashlll NiceHash \t\t\tBeamHashlll \t\t \t\t \t\t\t56 \t\t\tNH cuckAToo31 NiceHash \t\t\tcuckAToo31 \t\t \t\t \t\t\t57 \t\t\tNH cuckAToo32 NiceHash \t\t\tcuckAToo32 \t\t \t\t \t\t\t58 \t\t\tNH Ethash NiceHash \t\t\tEthash \t\t \t\t \t\t\t59 \t\t\tNH KAWPOW NiceHash \t\t\tKAWPOW \t\t \t\t \t\t\t60 \t\t\tNH Octopus NiceHash \t\t\tOctopus \t\t \t\t \t\t\t61 \t\t\tNILU Nilu \t\t\tEthash \t\t \t\t \t\t\t62 \t\t\tNUKO Nekonium \t\t\tEthash \t\t \t\t \t\t\t63 \t\t\tPGC Pegascoin \t\t\tEthash \t\t \t\t \t\t\t64 \t\t\tPOOLIN ETH Pool in \t\t\tEthash \t\t \t\t \t\t\t65 \t\t\tproh Etchash Prohashing \t\t\tEtchash \t\t \t\t \t\t\t66 \t\t\tPROH Ethash Prohashing \t\t\tEthash \t\t \t\t \t\t\t67 \t\t\tQKC QuarkChain \t\t\tEthash \t\t \t\t \t\t\t68 \t\t\tRVN Ravencoin \t\t\tKAWPOW \t\t \t\t \t\t\t69 \t\t\tSPARK BEAM  \t\t\tBeamHashlll \t\t \t\t \t\t\t70 \t\t\tSPARK ETH  \t\t\tEthash \t\t \t\t \t\t\t71 \t\t\tSPIDER ETH Spider \t\t\tEthash \t\t \t\t \t\t\t72 \t\t\tUNM Etchash unMineable \t\t\tEtchash \t\t \t\t \t\t\t73 \t\t\tUNM Ethash unMineable \t\t\tEthash \t\t \t\t \t\t\t74 \t\t\tUNM KAWPOW unMineable \t\t\tKAWPOW \t\t \t\t \t\t\t75 \t\t\tVIABTC ETC ViaBTC \t\t\tEtchash \t\t \t\t \t\t\t76 \t\t\tVIABTC RVN ViaBTC \t\t\tKAWPOW \t\t \t\t \t\t\t77 \t\t\tZELS \t\t\tKAWPOW \t\t \t\t \t\t\t78 \t\t\tZIL Zilliqa \t\t\tEthash \t\t \t\t \t\t\t79 \t\t\tZP Etchash  \t\t\tEtchash \t\t \t\t \t\t\t80 \t\t\tZP Ethash  \t\t\tEthash \t\t \t\t \t\t\t81 \t\t\tZP KAWPOW  \t\t\tKAWPOW \t\t \t        ","categories": ["download"],
        "tags": ["NBMiner"],
        "url": "https://ethminer.tech/download/latest/",
        "teaser": "https://ethminer.tech/assets/images/thumbs/500x300.png"
      },{
        "title": "Download NBMiner 39.7 - AMD+Nvidia GPU Miner [2021]",
        "excerpt":" Get started with NBMiner  \t\t \t\t\t \t\tVersion: 39.7  \t\tFile: *NBMiner.exe,    \t\tSHA256: 0a9f89cb87a8ba383d970ec3bd314ac339c0e872c4db44c7f7e7ee32403aa3c6  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new NBMiner stable version is ready.   You can download NBMiner 39.7 from here:   Download Now   Download (mirror)   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.        Changelog      feature: LHR mode support new GA104 version of 3060.   feature: ethash Turn on LHR mode by default for 3060 v1.   fix: ethash Fail to detect LHR lock on certain situation.   fix: Nvidia GPU power consumption issue on certain rig config.   delete: support for sero.   ","categories": ["download"],
        "tags": ["NBMiner"],
        "url": "https://ethminer.tech/download/39.7/",
        "teaser": "https://ethminer.tech/assets/images/thumbs/500x300.png"
      },]
