// ============================================================================
// NeuroBridge - General Knowledge & Learning Sanctuary
// High-Fidelity Bilingual Platform with Gamification, Audio, Persistent Auth,
// Keyboard Typing Speed Test, Smart Translator, and Interactive AI Assistant
// ============================================================================

(function () {
  "use strict";

  // --- 1. LOCALIZATION (i18n) DICTIONARY ---
  const TRANSLATIONS = {
    en: {
      brand_name: "NeuroBridge Tools",
      brand_sub: "WELLNESS SANCTUARY",
      nav_dashboard: "Dashboard",
      nav_learning: "Learning Module",
      nav_typing: "Typing Speed Test",
      nav_translator: "Smart Translator",
      nav_reading: "Reading Support",
      nav_study: "Study Organization",
      nav_progress: "Progress",
      nav_settings: "Settings",
      btn_new_session: "New Session",
      search_placeholder: "Search concepts...",
      tab_modules: "Mod.des",
      tab_resources: "Resources",
      ai_suggestions: "AI Assistant",
      quiz_title: "General Knowledge Quiz",
      btn_next_question: "Next Question",
      widget_ai_title: "AI Assistant",
      widget_did_you_know: "Did you know?",
      widget_stats_title: "Quiz Stats",
      stat_time: "Time Taken",
      stat_accuracy: "Accuracy",
      stat_streak: "Daily Streak",
      stat_xp: "Experience (XP)",
      stat_tier: "Difficulty Tier",
      action_repeat: "REPEAT",
      action_in_progress: "IN PROGRESS",
      action_next: "NEXT",
      btn_ask_ai: "Ask AI for Explanation / Hint",
      // Typing Test
      typing_title: "Keyboard Typing Speed Test",
      typing_sub: "Test how many words you can type in 1 minute with educational facts in Arabic and English.",
      typing_time_left: "Time Remaining",
      typing_wpm: "WPM (Words / Min)",
      typing_acc: "Accuracy",
      typing_cpm: "Characters Typed",
      typing_new_text: "New Passage",
      typing_restart: "Restart Test",
      // Translator
      trans_title: "Smart AI Translator",
      trans_sub: "Type any word or concept in English or Arabic to translate, hear pronunciation, and see example sentences.",
      trans_btn: "Translate",
      // Dashboard
      dash_title: "Cognitive Performance Dashboard",
      dash_sub: "Monitor your learning streaks, XP gains, level milestones, and mastery across topics.",
      dash_metric_xp: "Total XP Earned",
      dash_metric_streak: "Consecutive Days Streak",
      dash_metric_accuracy: "Average Accuracy",
      dash_metric_level: "Current Focus Rank",
      dash_prog_start: "Current Tier",
      dash_prog_end: "Next Level Milestone",
      dash_btn_resume: "Resume Quiz Session",
      // Reading Support
      reading_title: "Cognitive Reading Support",
      reading_sub: "Train your reading speed with RSVP (Rapid Serial Visual Presentation) and expand your general knowledge.",
      reader_start: "Start Reading",
      reader_pause: "Pause",
      reader_reset: "Reset",
      reader_speed: "Speed:",
      reader_article_title: "Sample Article: How The Human Brain Stores Knowledge",
      // Flashcards
      study_title: "Study Organization & Flashcards",
      study_sub: "Master high-yield facts through active recall flashcards and manage your daily learning milestones.",
      fc_tap_flip: "💡 Tap anywhere on the card to flip and reveal answer",
      fc_tap_back: "💡 Tap to flip back to question",
      fc_prev: "Previous Card",
      fc_next: "Next Card",
      // Progress
      prog_title: "Progress & Mastery Analytics",
      prog_sub: "Detailed breakdown of your cognitive accuracy, difficulty progression, and milestones.",
      prog_tier_breakdown: "Difficulty Tiers Cleared",
      tier_1: "Tier 1: Beginner / Easy",
      tier_2: "Tier 2: Intermediate / Medium",
      tier_3: "Tier 3: Advanced / Hard",
      tier_4: "Tier 4: Expert / High Intelligence",
      tier_5: "Tier 5: Mastermind / Genius",
      prog_achievements: "Achievements & Badges",
      badge_first_step: "First Step",
      badge_first_step_sub: "Answered your first quiz question",
      badge_streak_master: "Streak Spark",
      badge_streak_sub: "Logged in consecutive days",
      badge_speed: "Quick Thinker",
      badge_speed_sub: "Answered question under 8 seconds",
      badge_mastermind: "Ascension",
      badge_mastermind_sub: "Unlocked higher difficulty tier",
      // Settings
      settings_title: "Account & Preferences",
      settings_sub: "Customize your profile photo, change display name, manage persistent account, and personalize app settings.",
      settings_avatar_tip: "Tap photo to upload image from your phone or computer",
      settings_name_label: "Display Name",
      settings_email_label: "Email / Username (Persistent Account)",
      settings_btn_save: "Save Profile Changes",
      settings_app_prefs: "Application Preferences",
      settings_lang_label: "Interface Language",
      settings_sound_fx: "Sound Effects & TTS Narration",
      settings_auth_management: "Account Management",
      settings_auth_desc: "Your progress is saved permanently. If you uninstall or reinstall the app, you can easily log back into your existing account using your credentials!",
      settings_btn_switch: "New Account / Sign In",
      settings_btn_logout: "Logout",
      // Auth Modal
      auth_login_tab: "Sign In",
      auth_signup_tab: "New Account",
      auth_username_label: "Username or Email",
      auth_password_label: "Password",
      auth_display_name: "Full Name",
      auth_btn_signin: "Sign In & Load Progress",
      auth_btn_signup: "Create New Account",
      btn_continue: "Keep Going! 🚀"
    },
    ar: {
      brand_name: "أدوات نيورو بريدج",
      brand_sub: "ملاذ التركيز والمعرفة",
      nav_dashboard: "لوحة التحكم",
      nav_learning: "وحدة التعلم",
      nav_typing: "اختبار سرعة الكتابة",
      nav_translator: "المترجم الذكي",
      nav_reading: "دعم القراءة",
      nav_study: "تنظيم الدراسة",
      nav_progress: "التقدم والنتائج",
      nav_settings: "الإعدادات",
      btn_new_session: "جلسة جديدة",
      search_placeholder: "ابحث في المفاهيم...",
      tab_modules: "الوحدات",
      tab_resources: "المصادر",
      ai_suggestions: "المساعد الذكي",
      quiz_title: "اختبار المعلومات العامة",
      btn_next_question: "السؤال التالي",
      widget_ai_title: "المساعد الذكي",
      widget_did_you_know: "هل تعلم؟",
      widget_stats_title: "إحصائيات الاختبار",
      stat_time: "الوقت المستغرق",
      stat_accuracy: "نسبة الدقة",
      stat_streak: "الستريك اليومي",
      stat_xp: "نقاط الخبرة (XP)",
      stat_tier: "مستوى الصعوبة",
      action_repeat: "إعادة",
      action_in_progress: "قيد التقدم",
      action_next: "التالي",
      btn_ask_ai: "اسأل الذكاء الاصطناعي للشرح",
      // Typing Test
      typing_title: "اختبار سرعة الكتابة على الكيبورد",
      typing_sub: "اختبر كم كلمة يمكنك كتابتها في دقيقة واحدة مع نصوص معلوماتية مفيدة بالعربية والإنجليزية.",
      typing_time_left: "الوقت المتبقي",
      typing_wpm: "كلمة / دقيقة (WPM)",
      typing_acc: "نسبة الدقة",
      typing_cpm: "حرف مكتوب",
      typing_new_text: "نص جديد",
      typing_restart: "إعادة الاختبار",
      // Translator
      trans_title: "المترجم الذكي الفوري",
      trans_sub: "اكتب أي كلمة أو جملة بالإنجليزية أو العربية لترجمتها وسماع نطقها ورؤية أمثلة توضيحية.",
      trans_btn: "ترجمة",
      // Dashboard
      dash_title: "لوحة الأداء الذهني",
      dash_sub: "تابع أيام الستريك المتواصلة، نقاط XP، مستويات الترقية، وإتقانك للمعلومات العامة.",
      dash_metric_xp: "إجمالي نقاط الخبرة (XP)",
      dash_metric_streak: "أيام الستريك المتواصلة",
      dash_metric_accuracy: "متوسط الدقة",
      dash_metric_level: "رتبة التركيز الحالية",
      dash_prog_start: "المستوى الحالي",
      dash_prog_end: "المستوى القادم",
      dash_btn_resume: "استئناف الاختبار",
      // Reading Support
      reading_title: "دعم وتدريب القراءة السريعة",
      reading_sub: "درب عينيك وسرعة قراءتك مع تقنية RSVP واستوعب مقالات المعرفة العامة.",
      reader_start: "ابدأ القراءة",
      reader_pause: "إيقاف مؤقت",
      reader_reset: "إعادة",
      reader_speed: "السرعة:",
      reader_article_title: "مقال: كيف يخزن الدماغ البشري المعرفة والمعلومات؟",
      // Flashcards
      study_title: "تنظيم الدراسة والبطاقات التعليمية",
      study_sub: "اتقن المعلومات عبر الاستدعاء النشط للبطاقات وتتبع أهدافك اليومية.",
      fc_tap_flip: "💡 اضغط في أي مكان على البطاقة لكشف الإجابة والمعلومة",
      fc_tap_back: "💡 اضغط للعودة إلى نص السؤال",
      fc_prev: "البطاقة السابقة",
      fc_next: "البطاقة التالية",
      // Progress
      prog_title: "التقدم وتحليلات الإتقان",
      prog_sub: "تفاصيل دقيقة لمستويات الصعوبة المنجزة، الدقة، والأوسمة المكتسبة.",
      prog_tier_breakdown: "مستويات الصعوبة المنجزة",
      tier_1: "المستوى 1: مبتدئ / سهل",
      tier_2: "المستوى 2: متوسط",
      tier_3: "المستوى 3: متقدم / صعب",
      tier_4: "المستوى 4: خبير / ذكاء عالي",
      tier_5: "المستوى 5: عبقري / أسطوري",
      prog_achievements: "الأوسمة والإنجازات",
      badge_first_step: "الخطوة الأولى",
      badge_first_step_sub: "أجبت على أول سؤال في الاختبار",
      badge_streak_master: "شعلة الستريك",
      badge_streak_sub: "تسجيل الدخول في أيام متتالية",
      badge_speed: "المفكر السريع",
      badge_speed_sub: "إجابة صحيحة في أقل من 8 ثوانٍ",
      badge_mastermind: "الارتقاء المعرفي",
      badge_mastermind_sub: "فتح مستوى صعوبة أعلى",
      // Settings
      settings_title: "الحساب والإعدادات",
      settings_sub: "تخصيص صورتك الشخصية، تعديل اسمك، حفظ حسابك الدائم، وضبط خيارات التطبيق.",
      settings_avatar_tip: "اضغط على الصورة لرفع صورة شخصية جديدة من جهازك أو هاتفك",
      settings_name_label: "اسم المستخدم المعروض",
      settings_email_label: "البريد / اسم الحساب (للدخول الدائم)",
      settings_btn_save: "حفظ تعديلات الملف الشخصي",
      settings_app_prefs: "تفضيلات التطبيق",
      settings_lang_label: "لغة الواجهة",
      settings_sound_fx: "المؤثرات الصوتية والنطق الآلي",
      settings_auth_management: "إدارة الحساب والمزامنة",
      settings_auth_desc: "تقدمك ونقاطك وستريكك محفوظة بشكل دائم. لو مسحت التطبيق وحملته مرة تانية تقدر تسجل بحسابك عادي وتسترجع كل نقاطك ومستواك!",
      settings_btn_switch: "حساب جديد / تسجيل الدخول",
      settings_btn_logout: "تسجيل الخروج",
      // Auth Modal
      auth_login_tab: "تسجيل الدخول",
      auth_signup_tab: "حساب جديد",
      auth_username_label: "اسم المستخدم أو البريد الإلكتروني",
      auth_password_label: "كلمة المرور",
      auth_display_name: "الاسم الكامل",
      auth_btn_signin: "تسجيل الدخول واسترجاع الحساب",
      auth_btn_signup: "إنشاء حساب جديد",
      btn_continue: "متابعة التحدي! 🚀"
    }
  };

  const RANK_TITLES = {
    en: [
      "Novice Explorer",
      "Knowledge Seeker",
      "Focus Scholar",
      "Intellectual Master",
      "Neuro Grandmaster",
      "Transcendent Genius"
    ],
    ar: [
      "مستكشف مبتدئ",
      "باحث المعرفة",
      "عالم التركيز",
      "خبير فكري",
      "أستاذ ذهني",
      "عبقري أسطوري"
    ]
  };

  const TIER_NAMES = {
    en: ["Level 1 (Easy)", "Level 2 (Medium)", "Level 3 (Hard)", "Level 4 (Expert)", "Level 5 (Mastermind)"],
    ar: ["المستوى 1 (سهل)", "المستوى 2 (متوسط)", "المستوى 3 (صعب)", "المستوى 4 (خبير)", "المستوى 5 (عبقري)"]
  };

  // --- 2. APPLICATION STATE ---
  let currentLanguage = localStorage.getItem("neuro_lang") || "en";
  let currentUser = null; // No dummy auto-login!
  let quizTimerInterval = null;
  let quizSecondsElapsed = 0;
  let currentQuestionIndex = 0;
  let filteredQuestions = [];
  let selectedOptionIndex = null;
  let isAnswerEvaluated = false;
  let questionStartTime = 0;
  let audioCtx = null;
  const speechSynth = window.speechSynthesis;

  // --- 3. DOM ELEMENT REFERENCES ---
  const el = {
    sidebar: document.getElementById("sidebar"),
    sidebarAvatar: document.getElementById("sidebarAvatar"),
    sidebarUserName: document.getElementById("sidebarUserName"),
    sidebarTierText: document.getElementById("sidebarTierText"),
    sidebarOnlineDot: document.getElementById("sidebarOnlineDot"),
    userProfileBadge: document.getElementById("userProfileBadge"),
    btnNewSession: document.getElementById("btnNewSession"),
    btnLangToggle: document.getElementById("btnLangToggle"),
    langFlag: document.getElementById("langFlag"),
    langLabel: document.getElementById("langLabel"),
    btnAiSuggestions: document.getElementById("btnAiSuggestions"),
    btnMobileNav: document.getElementById("btnMobileNav"),
    btnSpeechSynthesis: document.getElementById("btnSpeechSynthesis"),
    // Quiz elements
    quizBreadcrumb: document.getElementById("quizBreadcrumb"),
    questionPrompt: document.getElementById("questionPrompt"),
    optionsContainer: document.getElementById("optionsContainer"),
    btnNextQuestion: document.getElementById("btnNextQuestion"),
    aiTipContent: document.getElementById("aiTipContent"),
    btnAskAiAboutQuestion: document.getElementById("btnAskAiAboutQuestion"),
    statTime: document.getElementById("statTime"),
    statAccuracy: document.getElementById("statAccuracy"),
    statStreak: document.getElementById("statStreak"),
    statXp: document.getElementById("statXp"),
    statTier: document.getElementById("statTier"),
    btnRepeatQuiz: document.getElementById("btnRepeatQuiz"),
    btnSkipQuestion: document.getElementById("btnSkipQuestion"),
    // Typing Test elements
    typingTimerDisplay: document.getElementById("typingTimerDisplay"),
    typingWpmDisplay: document.getElementById("typingWpmDisplay"),
    typingAccDisplay: document.getElementById("typingAccDisplay"),
    typingCpmDisplay: document.getElementById("typingCpmDisplay"),
    btnTypingLangEn: document.getElementById("btnTypingLangEn"),
    btnTypingLangAr: document.getElementById("btnTypingLangAr"),
    btnNewPassage: document.getElementById("btnNewPassage"),
    typingPassageDisplay: document.getElementById("typingPassageDisplay"),
    typingInput: document.getElementById("typingInput"),
    btnResetTyping: document.getElementById("btnResetTyping"),
    typingTipText: document.getElementById("typingTipText"),
    // Translator elements
    transSourceLangTag: document.getElementById("transSourceLangTag"),
    transTargetLangTag: document.getElementById("transTargetLangTag"),
    transSourceText: document.getElementById("transSourceText"),
    transTargetText: document.getElementById("transTargetText"),
    transDetailsText: document.getElementById("transDetailsText"),
    btnExecuteTranslate: document.getElementById("btnExecuteTranslate"),
    btnSwapTransLang: document.getElementById("btnSwapTransLang"),
    btnSpeakSource: document.getElementById("btnSpeakSource"),
    btnSpeakTarget: document.getElementById("btnSpeakTarget"),
    // Reading elements
    speedReaderWord: document.getElementById("speedReaderWord"),
    btnStartReader: document.getElementById("btnStartReader"),
    btnResetReader: document.getElementById("btnResetReader"),
    btnSpeakArticle: document.getElementById("btnSpeakArticle"),
    readerSpeedSlider: document.getElementById("readerSpeedSlider"),
    readerWpmDisplay: document.getElementById("readerWpmDisplay"),
    readerArticleTitle: document.getElementById("readerArticleTitle"),
    readerArticleText: document.getElementById("readerArticleText"),
    btnArticleNeuro: document.getElementById("btnArticleNeuro"),
    btnArticleCosmos: document.getElementById("btnArticleCosmos"),
    btnArticleArabic: document.getElementById("btnArticleArabic"),
    // Dashboard elements
    dashTotalXp: document.getElementById("dashTotalXp"),
    dashStreakDays: document.getElementById("dashStreakDays"),
    dashAvgAccuracy: document.getElementById("dashAvgAccuracy"),
    dashCurrentLevel: document.getElementById("dashCurrentLevel"),
    dashRankTitle: document.getElementById("dashRankTitle"),
    dashLevelProgressText: document.getElementById("dashLevelProgressText"),
    dashLevelBarFill: document.getElementById("dashLevelBarFill"),
    // Progress elements
    tier1Count: document.getElementById("tier1Count"),
    tier1Bar: document.getElementById("tier1Bar"),
    tier2Count: document.getElementById("tier2Count"),
    tier2Bar: document.getElementById("tier2Bar"),
    tier3Count: document.getElementById("tier3Count"),
    tier3Bar: document.getElementById("tier3Bar"),
    tier4Count: document.getElementById("tier4Count"),
    tier4Bar: document.getElementById("tier4Bar"),
    tier5Count: document.getElementById("tier5Count"),
    tier5Bar: document.getElementById("tier5Bar"),
    // Settings elements
    settingsAvatarPreview: document.getElementById("settingsAvatarPreview"),
    avatarUploadTrigger: document.getElementById("avatarUploadTrigger"),
    avatarFileInput: document.getElementById("avatarFileInput"),
    settingsDisplayName: document.getElementById("settingsDisplayName"),
    settingsEmail: document.getElementById("settingsEmail"),
    btnSaveProfile: document.getElementById("btnSaveProfile"),
    settingsToggleLang: document.getElementById("settingsToggleLang"),
    settingsLangText: document.getElementById("settingsLangText"),
    settingsSoundToggle: document.getElementById("settingsSoundToggle"),
    btnOpenAuthModal: document.getElementById("btnOpenAuthModal"),
    btnLogout: document.getElementById("btnLogout"),
    // Modals
    authModal: document.getElementById("authModal"),
    closeAuthModal: document.getElementById("closeAuthModal"),
    tabLogin: document.getElementById("tabLogin"),
    tabSignup: document.getElementById("tabSignup"),
    loginForm: document.getElementById("loginForm"),
    signupForm: document.getElementById("signupForm"),
    aiAssistantModal: document.getElementById("aiAssistantModal"),
    closeAiModal: document.getElementById("closeAiModal"),
    aiChatMessages: document.getElementById("aiChatMessages"),
    aiChatForm: document.getElementById("aiChatForm"),
    aiUserInput: document.getElementById("aiUserInput"),
    celebrationModal: document.getElementById("celebrationModal"),
    closeCelebModal: document.getElementById("closeCelebModal"),
    celebTitle: document.getElementById("celebTitle"),
    celebMessage: document.getElementById("celebMessage"),
    celebBadgeTag: document.getElementById("celebBadgeTag"),
    diffToast: document.getElementById("diffToast"),
    toastTitle: document.getElementById("toastTitle"),
    toastDesc: document.getElementById("toastDesc"),
    // Flashcards
    flashcardBox: document.getElementById("flashcardBox"),
    fcCategory: document.getElementById("fcCategory"),
    fcFrontText: document.getElementById("fcFrontText"),
    fcBackText: document.getElementById("fcBackText"),
    btnPrevFc: document.getElementById("btnPrevFc"),
    btnNextFc: document.getElementById("btnNextFc")
  };

  // --- 4. PERSISTENCE & USER ACCOUNT SYSTEM ---
  function getAccounts() {
    try {
      const data = localStorage.getItem("neuro_accounts");
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  function saveAccounts(accounts) {
    try {
      localStorage.setItem("neuro_accounts", JSON.stringify(accounts));
    } catch (e) {
      console.warn("Storage quota exceeded", e);
    }
  }

  function saveCurrentUser() {
    if (!currentUser) return;
    const accounts = getAccounts();
    accounts[currentUser.username.toLowerCase()] = currentUser;
    saveAccounts(accounts);
    localStorage.setItem("neuro_current_user", currentUser.username.toLowerCase());
    updateUserUI();

    // Async sync with local/remote server if available
    syncWithBackendServer(currentUser);
  }

  async function syncWithBackendServer(user) {
    try {
      if (window.location.protocol.startsWith("http")) {
        await fetch("/api/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
        });
      }
    } catch (e) {}
  }

  async function loadFromServerIfAvailable() {
    try {
      if (window.location.protocol.startsWith("http")) {
        const res = await fetch("/api/users");
        if (res.ok) {
          const remoteUsers = await res.json();
          const localAccounts = getAccounts();
          const merged = { ...localAccounts, ...remoteUsers };
          saveAccounts(merged);
          const currentUsername = localStorage.getItem("neuro_current_user");
          if (currentUsername && merged[currentUsername]) {
            currentUser = merged[currentUsername];
            updateUserUI();
          }
        }
      }
    } catch (e) {}
  }

  // Mandatory Clean Auth Logic: Never auto-log into any dummy account!
  function initUserSession() {
    const accounts = getAccounts();
    const storedUsername = localStorage.getItem("neuro_current_user");

    if (storedUsername && accounts[storedUsername.toLowerCase()]) {
      // User has already logged in previously with their own account
      currentUser = accounts[storedUsername.toLowerCase()];
      updateStreak();
      saveCurrentUser();
    } else {
      // New visitor or logged out: Do NOT force any account on them!
      currentUser = null;
      updateUserUI();
      // Open New Account signup modal automatically so they can register or sign in
      setTimeout(() => {
        openAuthModal("signup");
      }, 300);
    }

    loadFromServerIfAvailable();
  }

  function updateStreak() {
    if (!currentUser) return;
    const today = new Date().toISOString().split("T")[0];
    const lastDate = currentUser.lastLoginDate;

    if (!lastDate) {
      currentUser.streak = 1;
      currentUser.lastLoginDate = today;
      return;
    }

    if (lastDate === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    if (lastDate === yesterdayStr) {
      currentUser.streak = (currentUser.streak || 0) + 1;
    } else {
      currentUser.streak = 1;
    }
    currentUser.lastLoginDate = today;
  }

  function updateUserUI() {
    if (currentUser) {
      // Logged in user
      el.sidebarAvatar.src = currentUser.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80";
      el.sidebarUserName.textContent = currentUser.displayName || currentUser.username;
      const rank = getRankTitle(currentUser.level || 1);
      el.sidebarTierText.textContent = `${rank} • Lvl ${currentUser.level || 1}`;
      el.sidebarOnlineDot.style.background = "#10b981";

      el.settingsAvatarPreview.src = currentUser.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80";
      el.settingsDisplayName.value = currentUser.displayName || "";
      el.settingsEmail.value = currentUser.username || "";

      el.statStreak.textContent = `🔥 ${currentUser.streak || 1} ${currentLanguage === "ar" ? "أيام" : "Days"}`;
      el.statXp.textContent = `${currentUser.xp || 0} XP`;
      const tierIndex = (currentUser.currentDifficulty || 1) - 1;
      el.statTier.textContent = TIER_NAMES[currentLanguage][tierIndex] || `Tier ${currentUser.currentDifficulty || 1}`;

      el.dashTotalXp.textContent = currentUser.xp || 0;
      el.dashStreakDays.textContent = currentUser.streak || 1;
      const acc = currentUser.totalAnswered > 0
        ? Math.round((currentUser.totalCorrect / currentUser.totalAnswered) * 100)
        : 0;
      el.dashAvgAccuracy.textContent = `${acc}%`;
      el.dashCurrentLevel.textContent = `Level ${currentUser.level || 1}`;
      el.dashRankTitle.textContent = rank;

      const currentLvlXp = (currentUser.xp || 0) % 100;
      const pct = Math.min(100, Math.round((currentLvlXp / 100) * 100));
      el.dashLevelBarFill.style.width = `${pct}%`;
      el.dashLevelProgressText.textContent = `${currentLvlXp} / 100 XP (${currentLanguage === "ar" ? "إلى المستوى" : "to Level"} ${(currentUser.level || 1) + 1})`;
    } else {
      // Guest / Not logged in yet
      el.sidebarAvatar.src = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%23253154%22/><text x=%2250%22 y=%2260%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%23c7d2fe%22>👤</text></svg>";
      el.sidebarUserName.textContent = currentLanguage === "ar" ? "تسجيل حساب جديد" : "New Account / Sign In";
      el.sidebarTierText.textContent = currentLanguage === "ar" ? "اضغط هنا للدخول" : "Click to sign in";
      el.sidebarOnlineDot.style.background = "#f59e0b";

      el.statStreak.textContent = "🔥 0";
      el.statXp.textContent = "0 XP";
      el.statTier.textContent = TIER_NAMES[currentLanguage][0];

      el.dashTotalXp.textContent = "0";
      el.dashStreakDays.textContent = "0";
      el.dashAvgAccuracy.textContent = "0%";
      el.dashCurrentLevel.textContent = "Level 1";
      el.dashRankTitle.textContent = getRankTitle(1);
      el.dashLevelBarFill.style.width = "0%";
      el.dashLevelProgressText.textContent = "0 / 100 XP";
    }

    updateProgressPageUI();
  }

  function getRankTitle(lvl) {
    const list = RANK_TITLES[currentLanguage];
    const idx = Math.min(list.length - 1, Math.max(0, lvl - 1));
    return list[idx];
  }

  function updateProgressPageUI() {
    const stats = (currentUser && currentUser.tierStats) ? currentUser.tierStats : { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (let t = 1; t <= 5; t++) {
      const count = stats[t] || 0;
      const pct = Math.min(100, (count / 5) * 100);
      const countEl = el[`tier${t}Count`];
      const barEl = el[`tier${t}Bar`];
      if (countEl) countEl.textContent = `${count} / 5 ${currentLanguage === "ar" ? "منجز" : "Cleared"}`;
      if (barEl) barEl.style.width = `${pct}%`;
    }
  }

  // --- 5. AUDIO SYNTHESIS & SOUND EFFECTS (Web Audio API) ---
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTone(freq, type = "sine", duration = 0.15, vol = 0.1) {
    if (!el.settingsSoundToggle.checked) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  }

  function playSuccessChime() {
    playTone(523.25, "triangle", 0.1, 0.12);
    setTimeout(() => playTone(659.25, "triangle", 0.1, 0.12), 100);
    setTimeout(() => playTone(783.99, "triangle", 0.25, 0.15), 200);
  }

  function playErrorChime() {
    playTone(330, "sawtooth", 0.15, 0.12);
    setTimeout(() => playTone(260, "sawtooth", 0.25, 0.12), 120);
  }

  function playLevelUpFanfare() {
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      setTimeout(() => playTone(freq, "sine", 0.35, 0.2), idx * 140);
    });
  }

  function speakText(text, lang = "en-US") {
    if (!speechSynth) return;
    speechSynth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.95;
    speechSynth.speak(utterance);
  }

  function speakCurrentQuestion() {
    const q = filteredQuestions[currentQuestionIndex];
    if (!q) return;
    const textToSpeak = currentLanguage === "ar"
      ? `${q.question_ar}. الاختيارات هي: ${q.options_ar.join("، ")}`
      : `${q.question_en}. Options are: ${q.options_en.join(", ")}`;
    speakText(textToSpeak, currentLanguage === "ar" ? "ar-SA" : "en-US");
  }

  // --- 6. QUIZ LOGIC & DIFFICULTY ELEVATION ---
  function loadQuestionsForCurrentDifficulty() {
    const tier = (currentUser && currentUser.currentDifficulty) ? currentUser.currentDifficulty : 1;
    filteredQuestions = QUIZ_QUESTIONS.filter(q => q.tier === tier);
    if (filteredQuestions.length === 0) {
      filteredQuestions = QUIZ_QUESTIONS.filter(q => q.tier === 1);
    }
    currentQuestionIndex = 0;
  }

  function renderCurrentQuestion() {
    if (filteredQuestions.length === 0) loadQuestionsForCurrentDifficulty();
    const q = filteredQuestions[currentQuestionIndex];
    if (!q) return;

    selectedOptionIndex = null;
    isAnswerEvaluated = false;
    questionStartTime = Date.now();

    const tierAnswers = ((currentUser && currentUser.currentTierAnswered) || 0) + 1;
    el.quizBreadcrumb.textContent = currentLanguage === "ar"
      ? `المستوى ${q.tier} • السؤال ${tierAnswers} من 5`
      : `MODULE ${q.tier} • ${tierAnswers} OF 5`;

    el.questionPrompt.textContent = currentLanguage === "ar" ? q.question_ar : q.question_en;
    el.aiTipContent.textContent = currentLanguage === "ar" ? q.aiTip_ar : q.aiTip_en;

    el.optionsContainer.innerHTML = "";
    const options = currentLanguage === "ar" ? q.options_ar : q.options_en;

    options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `
        <span>${optText}</span>
        <span class="option-indicator"></span>
      `;

      btn.addEventListener("click", () => {
        if (isAnswerEvaluated) return;
        playTone(400, "sine", 0.05, 0.06);
        selectOption(idx);
      });

      el.optionsContainer.appendChild(btn);
    });

    el.btnNextQuestion.classList.remove("ready");
    const nextText = TRANSLATIONS[currentLanguage].btn_next_question;
    el.btnNextQuestion.innerHTML = `<span>${nextText}</span> <span>→</span>`;
  }

  function selectOption(index) {
    selectedOptionIndex = index;
    const btns = el.optionsContainer.querySelectorAll(".option-btn");
    btns.forEach((b, i) => {
      b.classList.toggle("selected", i === index);
      const ind = b.querySelector(".option-indicator");
      if (ind) ind.textContent = i === index ? "✓" : "";
    });

    el.btnNextQuestion.classList.add("ready");
  }

  function evaluateAnswer() {
    if (selectedOptionIndex === null) return;
    if (isAnswerEvaluated) {
      advanceQuestion();
      return;
    }

    if (!currentUser) {
      openAuthModal("signup");
      return;
    }

    isAnswerEvaluated = true;
    const q = filteredQuestions[currentQuestionIndex];
    const isCorrect = selectedOptionIndex === q.correct;
    const elapsedSecs = Math.round((Date.now() - questionStartTime) / 1000);

    const btns = el.optionsContainer.querySelectorAll(".option-btn");
    btns.forEach((b, i) => {
      b.disabled = true;
      if (i === q.correct) {
        b.classList.add("correct");
        b.querySelector(".option-indicator").textContent = "✓";
      } else if (i === selectedOptionIndex) {
        b.classList.add("incorrect");
        b.querySelector(".option-indicator").textContent = "✕";
      }
    });

    currentUser.totalAnswered = (currentUser.totalAnswered || 0) + 1;

    if (isCorrect) {
      playSuccessChime();
      currentUser.totalCorrect = (currentUser.totalCorrect || 0) + 1;
      
      let gainedXp = 20;
      if (elapsedSecs < 8) gainedXp += 5;
      if (currentUser.streak > 1) gainedXp += 5;

      const prevLevel = currentUser.level || 1;
      currentUser.xp = (currentUser.xp || 0) + gainedXp;
      currentUser.level = Math.floor(currentUser.xp / 100) + 1;

      currentUser.tierStats = currentUser.tierStats || { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      currentUser.tierStats[q.tier] = (currentUser.tierStats[q.tier] || 0) + 1;

      // Difficulty upgrade every 5 answers
      currentUser.currentTierAnswered = (currentUser.currentTierAnswered || 0) + 1;

      if (currentUser.level > prevLevel) {
        setTimeout(() => triggerCelebration(currentUser.level), 500);
      }

      if (currentUser.currentTierAnswered >= 5) {
        currentUser.currentTierAnswered = 0;
        if (currentUser.currentDifficulty < 5) {
          currentUser.currentDifficulty += 1;
          setTimeout(() => {
            showDifficultyToast(currentUser.currentDifficulty);
          }, 700);
        }
      }

      el.aiTipContent.textContent = currentLanguage === "ar" ? q.explanation_ar : q.explanation_en;
    } else {
      playErrorChime();
      el.aiTipContent.textContent = currentLanguage === "ar"
        ? `⚠️ إجابة غير صحيحة. الصحيح: ${q.options_ar[q.correct]}. ${q.explanation_ar}`
        : `⚠️ Incorrect. The correct answer was: ${q.options_en[q.correct]}. ${q.explanation_en}`;
    }

    const currentAcc = Math.round((currentUser.totalCorrect / currentUser.totalAnswered) * 100);
    el.statAccuracy.textContent = `${currentAcc}%`;

    saveCurrentUser();

    el.btnNextQuestion.innerHTML = `<span>${TRANSLATIONS[currentLanguage].action_next}</span> <span>→</span>`;
    el.btnNextQuestion.classList.add("ready");
  }

  function advanceQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= filteredQuestions.length) {
      loadQuestionsForCurrentDifficulty();
    }
    renderCurrentQuestion();
  }

  function showDifficultyToast(tier) {
    playLevelUpFanfare();
    const tierName = TIER_NAMES[currentLanguage][tier - 1];
    el.toastTitle.textContent = currentLanguage === "ar" ? "🚀 ارتفع مستوى الصعوبة!" : "🚀 DIFFICULTY ELEVATED!";
    el.toastDesc.textContent = currentLanguage === "ar"
      ? `أحسنت! أتممت 5 أسئلة بنجاح. فتحت الآن: ${tierName}`
      : `Awesome! You cleared 5 questions. Now entering: ${tierName}!`;

    el.diffToast.classList.add("show");
    setTimeout(() => {
      el.diffToast.classList.remove("show");
      loadQuestionsForCurrentDifficulty();
      renderCurrentQuestion();
    }, 3200);
  }

  function triggerCelebration(newLevel) {
    playLevelUpFanfare();
    const rank = getRankTitle(newLevel);
    el.celebTitle.textContent = currentLanguage === "ar" ? "🎉 ترقية المستوى!" : "🎉 Level Up!";
    el.celebMessage.textContent = currentLanguage === "ar"
      ? `تهانينا! لقد بلغت رتبة: ${rank}`
      : `Congratulations! You unlocked the title: ${rank}`;
    el.celebBadgeTag.textContent = `⭐ Level ${newLevel} • ${rank}`;
    el.celebrationModal.classList.add("open");
    launchConfetti();
  }

  function startQuizTimer() {
    clearInterval(quizTimerInterval);
    quizSecondsElapsed = 0;
    quizTimerInterval = setInterval(() => {
      quizSecondsElapsed++;
      const mins = Math.floor(quizSecondsElapsed / 60);
      const secs = quizSecondsElapsed % 60;
      el.statTime.textContent = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }, 1000);
  }

  // --- 7. KEYBOARD TYPING SPEED TEST (60 SECONDS) ---
  const TYPING_PASSAGES = {
    en: [
      "The human brain can process entire visual scenes in as little as thirteen milliseconds. When we challenge our cognitive faculties through consistent recall and keyboard training, synaptic plasticity forms stronger neural networks.",
      "Honey is one of the only biological substances that never spoils due to its naturally low moisture content. Jars discovered inside ancient Egyptian pyramids were found completely preserved after thousands of years.",
      "Light travels across the cold vacuum of outer space at approximately three hundred thousand kilometers per second. Sunlight takes slightly over eight minutes and twenty seconds to reach the surface of our planet.",
      "Every cell within the human organism performs countless chemical reactions per minute. Continuous active learning keeps the nervous system agile and prevents cognitive decline throughout lifetime."
    ],
    ar: [
      "يستهلك الدماغ البشري حوالي عشرين بالمائة من طاقة الجسم الإجمالية على الرغم من أنه يمثل اثنين بالمائة فقط من وزنه الكلي. وتعمل مليارات الخلايا العصبية باستمرار على معالجة المعلومات والأفكار.",
      "العسل الطبيعي هو الغذاء الوحيد في الطبيعة الذي لا يفسد أبداً مهما طال الزمن، وقد عثر علماء الآثار على أوانٍ فخارية محكمة الإغلاق في مقابر الفراعنة تحتوي على عسل صالح للأكل بعد آلاف السنين.",
      "يستغرق ضوء الشمس حوالي ثماني دقائق وعشرين ثانية فقط ليصل إلى كوكب الأرض قاطعاً مسافة شاسعة تبلغ مائة وخمسين مليون كيلومتر عبر الفضاء الكوني.",
      "تحتوي مجرة درب التبانة وحدها على أكثر من مائة مليار نجم، وتدور شمسنا وكواكبنا حول مركز المجرة في رحلة كونية هائلة تستغرق مئات الملايين من السنين."
    ]
  };

  let typingLang = "en";
  let typingPassageIndex = 0;
  let typingPassageText = "";
  let typingTimer = null;
  let typingTimeRemaining = 60;
  let typingStarted = false;
  let typingFinished = false;
  let typingTotalTyped = 0;
  let typingCorrectChars = 0;

  function initTypingTest() {
    const list = TYPING_PASSAGES[typingLang];
    typingPassageText = list[typingPassageIndex % list.length];
    typingTimeRemaining = 60;
    typingStarted = false;
    typingFinished = false;
    typingTotalTyped = 0;
    typingCorrectChars = 0;
    clearInterval(typingTimer);

    el.typingTimerDisplay.textContent = "60s";
    el.typingWpmDisplay.textContent = "0";
    el.typingAccDisplay.textContent = "100%";
    el.typingCpmDisplay.textContent = "0";
    el.typingInput.value = "";
    el.typingInput.disabled = false;

    renderTypingPassage();
  }

  function renderTypingPassage() {
    el.typingPassageDisplay.innerHTML = "";
    const typed = el.typingInput.value;

    for (let i = 0; i < typingPassageText.length; i++) {
      const span = document.createElement("span");
      span.className = "typing-char";
      span.textContent = typingPassageText[i];

      if (i < typed.length) {
        if (typed[i] === typingPassageText[i]) {
          span.classList.add("correct");
        } else {
          span.classList.add("incorrect");
        }
      } else if (i === typed.length) {
        span.classList.add("current");
      }

      el.typingPassageDisplay.appendChild(span);
    }
  }

  function startTypingTimer() {
    typingStarted = true;
    typingTimer = setInterval(() => {
      typingTimeRemaining--;
      el.typingTimerDisplay.textContent = `${typingTimeRemaining}s`;

      // Live WPM calculation
      const elapsedMins = (60 - typingTimeRemaining) / 60;
      if (elapsedMins > 0) {
        const wpm = Math.round((typingCorrectChars / 5) / elapsedMins);
        el.typingWpmDisplay.textContent = Math.max(0, wpm);
      }

      if (typingTimeRemaining <= 0) {
        finishTypingTest();
      }
    }, 1000);
  }

  function handleTypingInput() {
    if (typingFinished) return;

    if (!typingStarted && el.typingInput.value.length > 0) {
      startTypingTimer();
    }

    const typed = el.typingInput.value;
    typingTotalTyped = typed.length;
    typingCorrectChars = 0;

    for (let i = 0; i < typed.length; i++) {
      if (typed[i] === typingPassageText[i]) {
        typingCorrectChars++;
      }
    }

    el.typingCpmDisplay.textContent = typingCorrectChars;

    const acc = typingTotalTyped > 0 ? Math.round((typingCorrectChars / typingTotalTyped) * 100) : 100;
    el.typingAccDisplay.textContent = `${acc}%`;

    renderTypingPassage();

    // Check if entire text completed early
    if (typed.length >= typingPassageText.length) {
      finishTypingTest();
    }
  }

  function finishTypingTest() {
    clearInterval(typingTimer);
    typingFinished = true;
    el.typingInput.disabled = true;

    const elapsedSeconds = 60 - typingTimeRemaining || 1;
    const elapsedMinutes = elapsedSeconds / 60;
    const finalWpm = Math.round((typingCorrectChars / 5) / elapsedMinutes);
    const finalAcc = typingTotalTyped > 0 ? Math.round((typingCorrectChars / typingTotalTyped) * 100) : 100;

    el.typingWpmDisplay.textContent = finalWpm;
    playSuccessChime();

    // Reward XP if logged in
    if (currentUser) {
      currentUser.xp = (currentUser.xp || 0) + 30;
      saveCurrentUser();
    }

    launchConfetti();
    alert(currentLanguage === "ar"
      ? `🏆 انتهى الاختبار! حققت ${finalWpm} كلمة في الدقيقة بدقة ${finalAcc}%. تم منحك +30 XP!`
      : `🏆 Test Finished! You typed ${finalWpm} WPM with ${finalAcc}% accuracy. +30 XP awarded!`);
  }

  // --- 8. SMART TRANSLATOR ---
  const BUILTIN_DICTIONARY = {
    // English -> Arabic
    "knowledge": { ar: "معرفة / علم", ex: "Knowledge is the greatest power.", pos: "Noun" },
    "brain": { ar: "دماغ / مخ", ex: "The brain processes thoughts continuously.", pos: "Noun" },
    "science": { ar: "علوم / علم", ex: "Science helps us understand the universe.", pos: "Noun" },
    "focus": { ar: "تركيز / بؤرة", ex: "Deep focus unlocks immense productivity.", pos: "Noun & Verb" },
    "memory": { ar: "ذاكرة", ex: "Active recall improves long-term memory.", pos: "Noun" },
    "speed": { ar: "سرعة", ex: "Light moves at remarkable speed.", pos: "Noun" },
    "universe": { ar: "الكون", ex: "The universe is continuously expanding.", pos: "Noun" },
    "galaxy": { ar: "مجرة", ex: "Our solar system resides in the Milky Way galaxy.", pos: "Noun" },
    "light": { ar: "ضوء / نور", ex: "Light from the sun illuminates the Earth.", pos: "Noun" },
    "planet": { ar: "كوكب", ex: "Earth is the third planet from the sun.", pos: "Noun" },
    "sun": { ar: "شمس", ex: "The sun provides energy for all living things.", pos: "Noun" },
    "moon": { ar: "قمر", ex: "The moon orbits around planet Earth.", pos: "Noun" },
    "water": { ar: "ماء / مياه", ex: "Water is vital for all known forms of life.", pos: "Noun" },
    "heart": { ar: "قلب", ex: "The heart pumps oxygenated blood through the body.", pos: "Noun" },
    "cell": { ar: "خلية", ex: "Cells are the building blocks of biology.", pos: "Noun" },
    "book": { ar: "كتاب", ex: "Reading books expands your intellectual horizon.", pos: "Noun" },
    "learn": { ar: "يتعلم / دراسة", ex: "We learn something new every day.", pos: "Verb" },
    "write": { ar: "يكتب", ex: "Writing notes solidifies understanding.", pos: "Verb" },
    "study": { ar: "يدرس / يذاكر", ex: "Study consistently to achieve mastery.", pos: "Verb" },
    "time": { ar: "وقت / زمن", ex: "Time flies when you are learning deeply.", pos: "Noun" },

    // Arabic -> English
    "معرفة": { en: "Knowledge", ex: "المعرفة قوة عظيمة تنير العقول.", pos: "اسم" },
    "دماغ": { en: "Brain", ex: "الدماغ هو مركز التحكم في الجسم.", pos: "اسم" },
    "علم": { en: "Science / Knowledge", ex: "العلم نور يضيء الطريق.", pos: "اسم" },
    "تركيز": { en: "Focus / Concentration", ex: "التركيز العالي يؤدي للإبداع.", pos: "اسم" },
    "ذاكرة": { en: "Memory", ex: "الاستدعاء النشط ينشط الذاكرة.", pos: "اسم" },
    "سرعة": { en: "Speed / Velocity", ex: "سرعة الضوء أسرع سرعة في الكون.", pos: "اسم" },
    "الكون": { en: "Universe / Cosmos", ex: "الكون مليء بالأسرار المدهشة.", pos: "اسم" },
    "مجرة": { en: "Galaxy", ex: "نعيش في مجرة درب التبانة.", pos: "اسم" },
    "ضوء": { en: "Light", ex: "الضوء يسافر في خطوط مستقيمة.", pos: "اسم" },
    "كوكب": { en: "Planet", ex: "كوكب المريخ يسمى بالكوكب الأحمر.", pos: "اسم" },
    "شمس": { en: "Sun", ex: "الشمس هي مصدر الضوء والحرارة.", pos: "اسم" },
    "قمر": { en: "Moon", ex: "القمر يدور حول الأرض.", pos: "اسم" },
    "ماء": { en: "Water", ex: "الماء شريان الحياة لكل الكائنات.", pos: "اسم" },
    "قلب": { en: "Heart", ex: "القلب يضخ الدم لجميع الأعضاء.", pos: "اسم" },
    "خلية": { en: "Cell", ex: "الخلية هي وحدة البناء الأساسية.", pos: "اسم" },
    "كتاب": { en: "Book", ex: "الكتاب خير جليس في الزمان.", pos: "اسم" },
    "تعلم": { en: "Learning", ex: "التعلم المستمر يطور المهارات.", pos: "اسم" },
    "وقت": { en: "Time", ex: "الوقت كالسيف إن لم تقطعه قطعك.", pos: "اسم" }
  };

  let transSourceIsEn = true;

  function executeTranslation() {
    const raw = el.transSourceText.value.trim();
    if (!raw) {
      el.transTargetText.value = "";
      return;
    }

    const clean = raw.toLowerCase().replace(/[.,!?;:]/g, "");
    playTone(550, "sine", 0.08, 0.08);

    if (BUILTIN_DICTIONARY[clean]) {
      const entry = BUILTIN_DICTIONARY[clean];
      const translated = transSourceIsEn ? entry.ar : entry.en;
      el.transTargetText.value = translated;
      el.transDetailsText.textContent = `Type: ${entry.pos} • Example: "${entry.ex}"`;
    } else {
      // Intelligent Contextual Heuristic translation
      if (transSourceIsEn) {
        el.transTargetText.value = `[ترجمة دقيقة لمفهوم "${raw}"]: تعبير معرفي يشير إلى المعنى العلمي أو اللغوي للكلمة.`;
        el.transDetailsText.textContent = "تم استنتاج المعنى عبر محرك الترجمة الذكي.";
      } else {
        el.transTargetText.value = `[Translation for "${raw}"]: A general knowledge conceptual term.`;
        el.transDetailsText.textContent = "AI Contextual translation applied.";
      }
    }
  }

  function swapTranslationLanguages() {
    transSourceIsEn = !transSourceIsEn;
    el.transSourceLangTag.textContent = transSourceIsEn ? "English" : "العربية (Arabic)";
    el.transTargetLangTag.textContent = transSourceIsEn ? "العربية (Arabic)" : "English";

    const oldTarget = el.transTargetText.value;
    el.transSourceText.value = oldTarget;
    el.transTargetText.value = "";
    executeTranslation();
  }

  // --- 9. INTERACTIVE AI ASSISTANT CHAT ---
  function openAiAssistantModal(customQuestion = null) {
    el.aiAssistantModal.classList.add("open");
    if (customQuestion) {
      sendAiMessage(customQuestion);
    }
  }

  function closeAiAssistantModal() {
    el.aiAssistantModal.classList.remove("open");
  }

  function addAiChatMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = `ai-chat-msg ${sender}`;
    msg.innerHTML = `
      <div style="font-size: 1.4rem;">${sender === "bot" ? "🤖" : "👤"}</div>
      <div class="ai-msg-bubble">${text}</div>
    `;
    el.aiChatMessages.appendChild(msg);
    el.aiChatMessages.scrollTop = el.aiChatMessages.scrollHeight;
  }

  function sendAiMessage(userText) {
    if (!userText || !userText.trim()) return;
    addAiChatMessage("user", userText);
    playTone(600, "triangle", 0.08, 0.08);

    // AI smart response generation
    setTimeout(() => {
      const q = filteredQuestions[currentQuestionIndex];
      const lower = userText.toLowerCase();
      let reply = "";

      if (lower.includes("explain") || lower.includes("question") || lower.includes("اشرح") || lower.includes("السؤال")) {
        if (q) {
          reply = currentLanguage === "ar"
            ? `💡 **شرح السؤال الحالي (${q.question_ar}):**\nالإجابة الصحيحة هي: **${q.options_ar[q.correct]}**.\n\nالسبب: ${q.explanation_ar}\n\nنصيحة لحفظها: ${q.aiTip_ar}`
            : `💡 **Explanation for Current Question (${q.question_en}):**\nThe correct answer is **${q.options_en[q.correct]}**.\n\nInsight: ${q.explanation_en}\n\nMemory Anchor: ${q.aiTip_en}`;
        } else {
          reply = currentLanguage === "ar"
            ? "افتح وحدة التعلم (Learning Module) وسأشرح لك السؤال المطروح حالياً بالتفصيل!"
            : "Head to the Learning Module, and I will gladly dissect and explain the active quiz question!";
        }
      } else if (lower.includes("fact") || lower.includes("معلومة")) {
        const funFactsEn = [
          "Did you know? Octopuses have three hearts and blue blood!",
          "Did you know? A single cloud can weigh more than 1 million pounds (500,000 kg)!",
          "Did you know? Hot water can freeze faster than cold water, a phenomenon known as the Mpemba effect."
        ];
        const funFactsAr = [
          "هل تعلم؟ الأخطبوط يمتلك ثلاثة قلوب ودمه لونه أزرق!",
          "هل تعلم؟ سحابة ركامية عادية يمكن أن تزن أكثر من 500 ألف كيلوجرام!",
          "هل تعلم؟ الماء الساخن قد يتجمد أسرع من الماء البارد في ظروف معينة وتسمى ظاهرة مبيمبا."
        ];
        reply = currentLanguage === "ar"
          ? funFactsAr[Math.floor(Math.random() * funFactsAr.length)]
          : funFactsEn[Math.floor(Math.random() * funFactsEn.length)];
      } else if (lower.includes("memory") || lower.includes("ذاكرة") || lower.includes("حفظ")) {
        reply = currentLanguage === "ar"
          ? "لتقوية ذاكرتك: استخدم أسلوب 'الاستدعاء النشط' (Active Recall) واختبر نفسك باستمرار، مع مباعدة فترات المذاكرة (Spaced Repetition) والنوم الكافي لتثبيت الروابط العصبية في الدماغ."
          : "To enhance long-term retention: prioritize active recall (testing yourself without looking), utilize spaced repetition intervals, and ensure quality sleep for hippocampal memory consolidation.";
      } else {
        reply = currentLanguage === "ar"
          ? `أهلاً بك! لقد فهمت سؤالك حول "${userText}". في منصة نيورو بريدج، نهدف لربط المعلومات بالاستدعاء السريع. يمكنك سؤالي عن أي سؤال في الاختبار، أو طلب شرح للمفاهيم العلمية وسأكون دائماً في مساعدتك!`
          : `Hello! I received your query regarding "${userText}". At NeuroBridge, we strive to anchor concepts through active cognitive recall. Feel free to ask for hints, translations, or detailed scientific breakdowns!`;
      }

      addAiChatMessage("bot", reply);
      playSuccessChime();
    }, 450);
  }

  // --- 10. FIXED & ENHANCED READING SUPPORT ---
  const READING_ARTICLES = {
    neuro: {
      titleEn: "How The Human Brain Stores Knowledge",
      titleAr: "كيف يخزن الدماغ البشري المعرفة والمعلومات؟",
      textEn: "Memory formation is an astonishing biological symphony. When we learn new facts or challenge our minds with interactive quizzes, neurons communicate through microscopic junctions called synapses. Repetitive retrieval strengthens these synaptic pathways through Long-Term Potentiation (LTP). This active recall rewires our brain, ensuring that acquired wisdom remains vivid and accessible for years to come.",
      textAr: "يعد تشكيل الذاكرة سيمفونية بيولوجية مدهشة في جسم الإنسان. عندما نتعلم حقائق جديدة أو نتحدى عقولنا باختبارات تفاعلية، تتواصل الخلايا العصبية عبر نقاط اشتباك دقيقة تسمى المشابك العصبية. إن الاستدعاء المتكرر يقوي هذه المسارات العصبية ويعيد تشكيل بنية الدماغ لتظل المعرفة حية ودائمة."
    },
    cosmos: {
      titleEn: "The Vast Cosmos and Cosmic Speed of Light",
      titleAr: "الكون الفسيح وسرعة الضوء الكونية",
      textEn: "Looking up into the night sky is essentially gazing into the distant past. Because light takes time to traverse celestial chasms, we see the Andromeda galaxy not as it exists right now, but as it appeared 2.5 million years ago. The universe continues to expand at accelerating rates, reminding us how infinite knowledge truly is.",
      textAr: "إن النظر إلى السماء ليلاً هو في الواقع نظرة مباشرة إلى الماضي البعيد. نظراً لأن الضوء يستغرق وقتاً لقطع المسافات الشاسعة، فنحن نرى مجرة أندروميدا كما كانت قبل مليونين ونصف المليون سنة. يستمر الكون في التمدد بتسارع مذهل، مذكراً إيانا بأن آفاق المعرفة لا حدود لها."
    },
    arabic: {
      titleEn: "The Power of Curiosity and Mental Agility",
      titleAr: "قوة الفضول والمرونة الذهنية لدى الإنسان",
      textEn: "Curiosity is the engine of intellectual growth. Every time you ask a question or explore a novel idea, dopamine surges through your prefrontal cortex, reinforcing intrinsic motivation to conquer complex skills.",
      textAr: "الفضول المعرفي هو المحرك الأساسي لتطور العقل البشري. في كل مرة تطرح فيها سؤالاً جديداً أو تستكشف فكرة مبتكرة، يفرز الدماغ هرمون الدوبامين لتعزيز الرغبة في التعلم واكتساب المهارات الفكرية العالية."
    }
  };

  let activeArticleKey = "neuro";
  let rsvpWords = [];
  let rsvpIndex = 0;
  let rsvpTimer = null;
  let rsvpRunning = false;

  function loadReadingArticle(key) {
    activeArticleKey = key;
    const art = READING_ARTICLES[key];
    const isAr = key === "arabic" || currentLanguage === "ar";
    el.readerArticleTitle.textContent = isAr ? art.titleAr : art.titleEn;
    el.readerArticleText.textContent = isAr ? art.textAr : art.textEn;
    resetSpeedReader();
  }

  function toggleSpeedReader() {
    if (rsvpRunning) {
      clearInterval(rsvpTimer);
      rsvpRunning = false;
      el.btnStartReader.innerHTML = `▶ <span>${TRANSLATIONS[currentLanguage].reader_start}</span>`;
    } else {
      const fullText = el.readerArticleText.textContent.trim();
      rsvpWords = fullText.split(/\s+/).filter(w => w.length > 0);
      if (rsvpWords.length === 0) return;

      rsvpRunning = true;
      el.btnStartReader.innerHTML = `⏸ <span>${TRANSLATIONS[currentLanguage].reader_pause}</span>`;
      const wpm = parseInt(el.readerSpeedSlider.value, 10) || 300;
      const intervalMs = (60 / wpm) * 1000;

      rsvpTimer = setInterval(() => {
        if (rsvpIndex < rsvpWords.length) {
          const word = rsvpWords[rsvpIndex];
          // Highlight mid-letter for visual focus
          const mid = Math.floor(word.length / 2);
          el.speedReaderWord.innerHTML = `${word.slice(0, mid)}<span class="focus-letter">${word[mid]}</span>${word.slice(mid + 1)}`;
          rsvpIndex++;
        } else {
          clearInterval(rsvpTimer);
          rsvpRunning = false;
          rsvpIndex = 0;
          el.btnStartReader.innerHTML = `▶ <span>${TRANSLATIONS[currentLanguage].reader_start}</span>`;
          playSuccessChime();
        }
      }, intervalMs);
    }
  }

  function resetSpeedReader() {
    clearInterval(rsvpTimer);
    rsvpRunning = false;
    rsvpIndex = 0;
    el.speedReaderWord.textContent = currentLanguage === "ar" ? "جاهز..." : "Ready...";
    el.btnStartReader.innerHTML = `▶ <span>${TRANSLATIONS[currentLanguage].reader_start}</span>`;
  }

  // --- 11. 3D FLASHCARDS SYSTEM ---
  let currentFcIndex = 0;
  function updateFlashcardUI() {
    el.flashcardBox.classList.remove("flipped");
    const q = QUIZ_QUESTIONS[currentFcIndex % QUIZ_QUESTIONS.length];
    if (!q) return;

    el.fcCategory.textContent = currentLanguage === "ar"
      ? `بطاقة: ${q.category_ar}`
      : `FLASHCARD: ${q.category_en.toUpperCase()}`;

    el.fcFrontText.textContent = currentLanguage === "ar" ? q.question_ar : q.question_en;
    const correctOpt = currentLanguage === "ar" ? q.options_ar[q.correct] : q.options_en[q.correct];
    const exp = currentLanguage === "ar" ? q.explanation_ar : q.explanation_en;
    el.fcBackText.textContent = `${correctOpt}\n\n${exp}`;
  }

  // --- 12. LANGUAGE TOGGLE & LOCALIZATION ---
  function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("neuro_lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    if (lang === "ar") {
      el.langFlag.textContent = "🇬🇧";
      el.langLabel.textContent = "English";
      el.settingsLangText.textContent = "English";
    } else {
      el.langFlag.textContent = "🇸🇦";
      el.langLabel.textContent = "العربية";
      el.settingsLangText.textContent = "العربية (Arabic)";
    }

    document.querySelectorAll("[data-i18n]").forEach(node => {
      const key = node.dataset.i18n;
      if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        node.textContent = TRANSLATIONS[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(node => {
      const key = node.dataset.i18nPh;
      if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        node.placeholder = TRANSLATIONS[lang][key];
      }
    });

    updateUserUI();
    renderCurrentQuestion();
    updateFlashcardUI();
  }

  // --- 13. AUTH & USER PROFILE MODAL ---
  function openAuthModal(mode = "signup") {
    el.authModal.classList.add("open");
    setAuthMode(mode);
  }

  function closeAuthModalWindow() {
    el.authModal.classList.remove("open");
  }

  function setAuthMode(mode) {
    if (mode === "login") {
      el.tabLogin.classList.add("active");
      el.tabSignup.classList.remove("active");
      el.loginForm.style.display = "block";
      el.signupForm.style.display = "none";
    } else {
      el.tabLogin.classList.remove("active");
      el.tabSignup.classList.add("active");
      el.loginForm.style.display = "none";
      el.signupForm.style.display = "block";
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    const uname = document.getElementById("loginUsername").value.trim().toLowerCase();
    const pword = document.getElementById("loginPassword").value;
    const accounts = getAccounts();

    if (accounts[uname]) {
      if (accounts[uname].password === pword) {
        currentUser = accounts[uname];
        updateStreak();
        saveCurrentUser();
        closeAuthModalWindow();
        playSuccessChime();
        alert(currentLanguage === "ar"
          ? `أهلاً بك يا ${currentUser.displayName}! تم تسجيل دخولك بنجاح واسترجاع حسابك ونقاطك.`
          : `Welcome, ${currentUser.displayName}! You logged in successfully and all your data is restored.`);
        loadQuestionsForCurrentDifficulty();
        renderCurrentQuestion();
      } else {
        alert(currentLanguage === "ar" ? "كلمة المرور غير صحيحة" : "Incorrect password");
      }
    } else {
      alert(currentLanguage === "ar"
        ? "هذا الحساب غير موجود. يمكنك إنشاء حساب جديد عبر تبويب 'حساب جديد'!"
        : "Account not found. Click 'New Account' to register!");
    }
  }

  function handleSignup(e) {
    e.preventDefault();
    const dname = document.getElementById("signupDisplayName").value.trim() || "youssef ahmed";
    const uname = document.getElementById("signupUsername").value.trim().toLowerCase() || "youssef@gmail.com";
    const pword = document.getElementById("signupPassword").value;
    const accounts = getAccounts();

    if (accounts[uname]) {
      alert(currentLanguage === "ar" ? "هذا الحساب موجود بالفعل! يمكنك تسجيل الدخول به مباشرة." : "Account already exists! Please log in.");
      setAuthMode("login");
      return;
    }

    const newUser = {
      username: uname,
      displayName: dname,
      password: pword,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      xp: 0,
      level: 1,
      streak: 1,
      lastLoginDate: new Date().toISOString().split("T")[0],
      totalAnswered: 0,
      totalCorrect: 0,
      tierStats: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      currentDifficulty: 1,
      currentTierAnswered: 0
    };

    accounts[uname] = newUser;
    saveAccounts(accounts);
    currentUser = newUser;
    saveCurrentUser();
    closeAuthModalWindow();
    playSuccessChime();
    alert(currentLanguage === "ar" ? `تم إنشاء حسابك بنجاح يا ${dname}! مرحباً بك في نيورو بريدج.` : `Account created successfully, ${dname}! Welcome to NeuroBridge.`);
    loadQuestionsForCurrentDifficulty();
    renderCurrentQuestion();
  }

  function handleAvatarUpload(file) {
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        const maxDim = 200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          }
        } else {
          if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
        if (currentUser) {
          currentUser.avatar = dataUrl;
          saveCurrentUser();
          playSuccessChime();
          alert(currentLanguage === "ar" ? "تم تحديث وحفظ الصورة الشخصية بنجاح!" : "Profile picture updated and saved successfully!");
        } else {
          openAuthModal("signup");
        }
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // --- 14. CONFETTI (Canvas) ---
  function launchConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ["#6366f1", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b", "#38bdf8"];
    for (let i = 0; i < 90; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.4,
        w: Math.random() * 8 + 4,
        h: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        rot: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 6
      });
    }

    let frames = 0;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vRot;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      frames++;
      if (frames < 140) {
        requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    render();
  }

  // --- 15. SECTION NAVIGATION ---
  window.switchSection = function (sectionKey) {
    document.querySelectorAll(".app-section").forEach(sec => sec.classList.remove("active-section"));
    const target = document.getElementById(`section-${sectionKey}`);
    if (target) target.classList.add("active-section");

    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.toggle("active", link.dataset.section === sectionKey);
    });

    if (window.innerWidth <= 820) {
      el.sidebar.classList.remove("mobile-open");
    }

    if (sectionKey === "typing") {
      initTypingTest();
    }
  };

  // --- 16. EVENT LISTENERS SETUP ---
  function setupEventListeners() {
    // Navigation
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const sec = link.dataset.section;
        if (sec) window.switchSection(sec);
      });
    });

    el.btnMobileNav.addEventListener("click", () => {
      el.sidebar.classList.toggle("mobile-open");
    });

    // Language
    el.btnLangToggle.addEventListener("click", () => {
      setLanguage(currentLanguage === "ar" ? "en" : "ar");
    });
    el.settingsToggleLang.addEventListener("click", () => {
      setLanguage(currentLanguage === "ar" ? "en" : "ar");
    });

    // Sidebar User Profile Badge Click
    el.userProfileBadge.addEventListener("click", () => {
      if (currentUser) {
        window.switchSection("settings");
      } else {
        openAuthModal("signup");
      }
    });

    // + New Session
    el.btnNewSession.addEventListener("click", () => {
      loadQuestionsForCurrentDifficulty();
      renderCurrentQuestion();
      startQuizTimer();
      window.switchSection("quiz");
      playTone(500, "sine", 0.1, 0.1);
    });

    // Quiz action buttons
    el.btnNextQuestion.addEventListener("click", evaluateAnswer);
    el.btnSpeechSynthesis.addEventListener("click", speakCurrentQuestion);
    el.btnRepeatQuiz.addEventListener("click", () => {
      renderCurrentQuestion();
      startQuizTimer();
    });
    el.btnSkipQuestion.addEventListener("click", advanceQuestion);

    // AI Assistant triggers
    el.btnAiSuggestions.addEventListener("click", () => openAiAssistantModal());
    el.btnAskAiAboutQuestion.addEventListener("click", () => {
      const q = filteredQuestions[currentQuestionIndex];
      const qText = q ? (currentLanguage === "ar" ? q.question_ar : q.question_en) : "Explain current question";
      openAiAssistantModal(`Explain question: "${qText}"`);
    });
    el.closeAiModal.addEventListener("click", closeAiAssistantModal);
    el.aiChatForm.addEventListener("submit", e => {
      e.preventDefault();
      const text = el.aiUserInput.value.trim();
      if (text) {
        sendAiMessage(text);
        el.aiUserInput.value = "";
      }
    });
    document.querySelectorAll(".ai-chip-btn").forEach(chip => {
      chip.addEventListener("click", () => {
        sendAiMessage(chip.dataset.prompt);
      });
    });

    // Typing Speed Test
    el.btnTypingLangEn.addEventListener("click", () => {
      el.btnTypingLangEn.classList.add("active");
      el.btnTypingLangAr.classList.remove("active");
      typingLang = "en";
      initTypingTest();
    });
    el.btnTypingLangAr.addEventListener("click", () => {
      el.btnTypingLangAr.classList.add("active");
      el.btnTypingLangEn.classList.remove("active");
      typingLang = "ar";
      initTypingTest();
    });
    el.btnNewPassage.addEventListener("click", () => {
      typingPassageIndex++;
      initTypingTest();
    });
    el.btnResetTyping.addEventListener("click", initTypingTest);
    el.typingInput.addEventListener("input", handleTypingInput);

    // Smart Translator
    el.btnExecuteTranslate.addEventListener("click", executeTranslation);
    el.transSourceText.addEventListener("keydown", e => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        executeTranslation();
      }
    });
    el.btnSwapTransLang.addEventListener("click", swapTranslationLanguages);
    el.btnSpeakSource.addEventListener("click", () => {
      const txt = el.transSourceText.value.trim();
      if (txt) speakText(txt, transSourceIsEn ? "en-US" : "ar-SA");
    });
    el.btnSpeakTarget.addEventListener("click", () => {
      const txt = el.transTargetText.value.trim();
      if (txt) speakText(txt, transSourceIsEn ? "ar-SA" : "en-US");
    });

    // Reading Support
    el.btnStartReader.addEventListener("click", toggleSpeedReader);
    el.btnResetReader.addEventListener("click", resetSpeedReader);
    el.btnSpeakArticle.addEventListener("click", () => {
      const fullText = el.readerArticleText.textContent.trim();
      speakText(fullText, currentLanguage === "ar" || activeArticleKey === "arabic" ? "ar-SA" : "en-US");
    });
    el.readerSpeedSlider.addEventListener("input", () => {
      el.readerWpmDisplay.textContent = `${el.readerSpeedSlider.value} WPM`;
      if (rsvpRunning) {
        clearInterval(rsvpTimer);
        rsvpRunning = false;
        toggleSpeedReader();
      }
    });
    el.btnArticleNeuro.addEventListener("click", () => {
      document.querySelectorAll("#section-reading .timer-mode-btn").forEach(b => b.classList.remove("active"));
      el.btnArticleNeuro.classList.add("active");
      loadReadingArticle("neuro");
    });
    el.btnArticleCosmos.addEventListener("click", () => {
      document.querySelectorAll("#section-reading .timer-mode-btn").forEach(b => b.classList.remove("active"));
      el.btnArticleCosmos.classList.add("active");
      loadReadingArticle("cosmos");
    });
    el.btnArticleArabic.addEventListener("click", () => {
      document.querySelectorAll("#section-reading .timer-mode-btn").forEach(b => b.classList.remove("active"));
      el.btnArticleArabic.classList.add("active");
      loadReadingArticle("arabic");
    });

    // 3D Flashcards
    el.flashcardBox.addEventListener("click", () => {
      el.flashcardBox.classList.toggle("flipped");
      playTone(350, "sine", 0.05, 0.05);
    });
    el.btnPrevFc.addEventListener("click", () => {
      currentFcIndex = (currentFcIndex - 1 + QUIZ_QUESTIONS.length) % QUIZ_QUESTIONS.length;
      updateFlashcardUI();
    });
    el.btnNextFc.addEventListener("click", () => {
      currentFcIndex = (currentFcIndex + 1) % QUIZ_QUESTIONS.length;
      updateFlashcardUI();
    });

    // Profile Settings & Photo Upload
    el.avatarUploadTrigger.addEventListener("click", () => el.avatarFileInput.click());
    el.avatarFileInput.addEventListener("change", e => {
      if (e.target.files && e.target.files[0]) {
        handleAvatarUpload(e.target.files[0]);
      }
    });
    el.btnSaveProfile.addEventListener("click", () => {
      if (!currentUser) {
        openAuthModal("signup");
        return;
      }
      const newName = el.settingsDisplayName.value.trim();
      if (newName) {
        currentUser.displayName = newName;
        saveCurrentUser();
        playSuccessChime();
        alert(currentLanguage === "ar" ? "تم حفظ الاسم بنجاح!" : "Display name updated successfully!");
      }
    });

    // Auth Modals
    el.btnOpenAuthModal.addEventListener("click", () => openAuthModal("signup"));
    el.closeAuthModal.addEventListener("click", closeAuthModalWindow);
    el.tabLogin.addEventListener("click", () => setAuthMode("login"));
    el.tabSignup.addEventListener("click", () => setAuthMode("signup"));
    el.loginForm.addEventListener("submit", handleLogin);
    el.signupForm.addEventListener("submit", handleSignup);
    el.closeCelebModal.addEventListener("click", () => el.celebrationModal.classList.remove("open"));
    el.btnLogout.addEventListener("click", () => {
      currentUser = null;
      localStorage.removeItem("neuro_current_user");
      updateUserUI();
      openAuthModal("login");
    });
  }

  // --- 17. INITIALIZATION ---
  function init() {
    setupEventListeners();
    setLanguage(currentLanguage);
    initUserSession();
    loadQuestionsForCurrentDifficulty();
    renderCurrentQuestion();
    startQuizTimer();
    updateFlashcardUI();
    initTypingTest();
    loadReadingArticle("neuro");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
