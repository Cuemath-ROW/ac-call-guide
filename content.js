/* ============================================================================
   AC CALL GUIDE — CONTENT
   Everything the admission counsellor reads lives in this one file.
   Edit text here, commit, push. GitHub Pages redeploys in about a minute.

   Tokens you can use inside any script text:
     [AC]      the counsellor's own name (asked once, stored in the browser)
     [child]   child's name (typed on the call screen, optional)
     [date]    evaluation date (typed on the call screen, optional)
     [greet]   auto: "Good morning / afternoon / evening" by the parent's time zone picked on screen

   Items marked DRAFT or TODO are for the admissions lead to confirm or rewrite.
   ============================================================================ */

window.CONTENT = {
  meta: {
    title: "AC Call Guide",
    subtitle: "Post-evaluation calls, US admissions",
    version: "0.1 draft, 2026-09-05",
    stance: "You are a consultant helping a parent choose the right math learning setup for their child. Not a salesperson. Every step below exists to make that choice clear, and to make the next step explicit before the call ends."
  },

  /* ---------- Guardrails: shown on Home and repeated on the steps they apply to ---------- */
  guardrails: [
    { id: "ask",      text: "Always ask for the enrolment. Calls with a clear ask enrolled 59% of the time; calls without, 23%." },
    { id: "grid",     text: "Read prices from the grid, say the total once, then confirm it back. Never do arithmetic out loud." },
    { id: "coach",    text: "Say coach. Never teacher or tutor." },
    { id: "report",   text: "Lead with the child's own report before any general proof point (ratings, awards, years in business)." },
    { id: "spouse",   text: "If a spouse is mentioned, offer a joint call at a fixed time instead of accepting a deferral." },
    { id: "one_ac",   text: "One counsellor owns the parent. Do not call a parent another counsellor is already working." },
    { id: "privacy",  text: "Never mention another family's account, another child's report, or how coaches are paid." },
    { id: "time",     text: "Call between 9 AM and 8 PM in the parent's local time. Check the time strip before you dial." },
    { id: "cadence",  text: "One attempt per day per channel. If the parent asks to pause or stop, stop immediately and log it." },
    { id: "date",     text: "No call ends without either a payment or a specific date and time for the next step." }
  ],

  /* ---------- US time zones for the time strip ---------- */
  timezones: [
    { id: "ET", label: "Eastern",  iana: "America/New_York" },
    { id: "CT", label: "Central",  iana: "America/Chicago" },
    { id: "MT", label: "Mountain", iana: "America/Denver" },
    { id: "PT", label: "Pacific",  iana: "America/Los_Angeles" }
  ],
  callWindow: { start: 9, end: 20, cautionStart: 8, cautionEnd: 21 },

  /* ---------- Call outcomes: pick one at the Close step ---------- */
  outcomes: [
    { id: "paid",     label: "Paid on the call",
      closing: "Thank you, [parent]. The payment has gone through and you will get a confirmation email in the next few minutes with the coach's profile and the first-class details. I will also message you on WhatsApp so you have my number for anything at all.",
      followup: "Hi [parent], this is [AC] from Cuemath. Thank you for enrolling [child] today. You will receive the confirmation email with the coach profile and first-class details shortly. Save this number for anything you need. Welcome to Cuemath." },
    { id: "link",     label: "Payment link shared, parent will pay",
      closing: "Perfect. I am sending the payment link to your email and WhatsApp right now. It has the exact plan we discussed, [plan]. Once you complete it the coach slot is locked for [child]. I will check in with you at [time] tomorrow in case anything needs help.",
      followup: "Hi [parent], [AC] from Cuemath. As discussed, here is the payment link for [child]'s plan: [link]. It opens the exact plan we spoke about. The coach slot is held until [hold]. Reply here if anything is unclear and I will sort it out." },
    { id: "followup", label: "Follow-up call agreed",
      closing: "That makes sense. Let us speak again on [followup_date] at [followup_time] your time. I will send a short summary of the report, the plan, and the pricing on WhatsApp so you have everything in one place before then.",
      followup: "Hi [parent], [AC] from Cuemath. Thank you for the time today. Summary for [child]: strengths [strengths], areas to build [gaps], plan [plan]. We speak again on [followup_date] at [followup_time]. Message me here before that if anything comes up." },
    { id: "spouse",   label: "Joint call with spouse agreed",
      closing: "Good idea. Let us do a short call together with both of you on [followup_date] at [followup_time] your time. I will walk through the report and the plan in ten minutes so you can decide together.",
      followup: "Hi [parent], [AC] from Cuemath. Confirming our call with both of you on [followup_date] at [followup_time]. I will share [child]'s report and learning plan on screen. Looking forward to it." },
    { id: "ni",       label: "Not interested, closing the profile",
      closing: "I understand, and thank you for telling me clearly. I will close [child]'s profile so you do not get further calls from us. The report and learning plan stay valid, and if things change you can reach me on this number.",
      followup: "Hi [parent], [AC] from Cuemath. As discussed I have closed [child]'s profile and you will not receive further calls from us. The MathFit report remains yours to use. Wishing [child] all the best." }
  ],

  /* ---------- Pricing: TODO admissions lead to fill the real grid ---------- */
  pricing: {
    todo: "TODO: confirm every number in this grid before launch. Figures below are placeholders taken from the sample pricing email (Grades 6-7, Standard) and the most-quoted numbers on calls.",
    tiers: [
      { id: "basic",    label: "Basic",    classLength: "40 min", grades: "TODO (e.g. K-5)", coach: "US-licensed specialist coach" },
      { id: "standard", label: "Standard", classLength: "55 min", grades: "TODO (e.g. 3-8)", coach: "Cuemath senior coach" }
    ],
    grid: [
      { tier: "Standard", tenure: "12 months", classes: 104, perClass: "$20.00", total: "$2,080", fee: "TODO", note: "Platform fee waived on 12-month? TODO" },
      { tier: "Standard", tenure: "6 months",  classes: 52,  perClass: "$22.50", total: "$1,170", fee: "TODO", note: "" },
      { tier: "Standard", tenure: "3 months",  classes: 26,  perClass: "$25.00", total: "$650",   fee: "$45?",  note: "Quoted as $650 and $489 on different calls. TODO confirm." },
      { tier: "Standard", tenure: "1 month",   classes: 8,   perClass: "TODO",   total: "$166?",  fee: "TODO", note: "Rarely offered; confirm if it exists." },
      { tier: "Basic",    tenure: "12 months", classes: 104, perClass: "$15.00", total: "$1,560", fee: "TODO", note: "" },
      { tier: "Basic",    tenure: "6 months",  classes: 52,  perClass: "TODO",   total: "$884?",  fee: "TODO", note: "" },
      { tier: "Basic",    tenure: "3 months",  classes: 26,  perClass: "TODO",   total: "$489?",  fee: "TODO", note: "" }
    ],
    rules: [
      "Frequency: 2 classes a week is the plan the numbers are built on. Extra classes around exams or catch-up can be scheduled inside the plan.",
      "Sibling benefit: TODO confirm. Recent policy: 16 extra classes for the second child and tenure extended by 2 months.",
      "Referral benefit: TODO confirm. Quoted on calls as 8 extra classes.",
      "Platform fee: TODO one number and when it applies. On calls it was quoted as $90, $45, $19 and $15 a month. This inconsistency cost trust. Say one number.",
      "Refund: pro-rated, no questions asked, for unused classes. TODO confirm exact wording and the two-class coach-switch window.",
      "Pause: classes can be paused for travel or exams. TODO confirm maximum pause and how tenure is adjusted.",
      "Payment: one upfront payment per plan. Splitting is not offered. TODO confirm whether any exception path exists, and if so who approves it.",
      "Carry-forward on renewal: up to 25% of the renewed plan's classes can be carried forward. TODO confirm for US."
    ],
    sequence: [
      "Anchor to the plan the specialist already showed: \"You would have seen the plan at the end of the evaluation and again in the email with the report.\"",
      "Name the plan you recommend for this child and why, using the report: which tier, which tenure, tied to the 3-month and 12-month milestones.",
      "Say the total once from the grid. Then the per-class figure. Then confirm: \"So that is [total] for [classes] classes over [tenure].\"",
      "State what is included in one breath: coach, 1:1 classes, practice platform, progress reviews, refund and coach-switch guarantee.",
      "Pause. Let the parent respond. Handle the objection from the library. Do not restate the price a second time unless asked.",
      "Ask: \"Shall we lock [child]'s coach slot now? I can stay on the call while you complete it.\""
    ]
  },

  /* ---------- The five call flows ---------- */
  flows: [
    {
      id: "first", title: "First post-eval call", icon: "1",
      subtitle: "The parent has done the MathFit evaluation. You are calling for feedback and to take them through the report, the learning plan and enrolment.",
      steps: [
        { id: "screen", title: "Call screening", goal: "Get past call screening or voicemail cleanly with one fixed line.",
          script: "Hi, this is [AC] calling from Cuemath. This is regarding [child]'s MathFit evaluation.",
          say: ["Name, company, reason. Nothing else.", "Same line every time so screening apps and voicemail transcribe it correctly."],
          avoid: ["Do not say 'sales', 'offer' or 'discount' on a screening line.", "Do not leave a long voicemail here. Use the Not Reached flow for voicemail."],
          guardrails: ["time", "one_ac"] },
        { id: "confirm", title: "Confirm the parent", goal: "Make sure you are speaking to the parent before you say anything about the child.",
          script: "Am I speaking with [parent], [child]'s parent?",
          say: ["Wait for a yes.", "If someone else answers, ask for a good time to reach the parent and end politely."],
          avoid: ["Do not discuss the report or pricing with anyone other than the parent."],
          guardrails: ["privacy"] },
        { id: "greet", title: "Greet and introduce", goal: "Set a consultative tone in one sentence.",
          script: "[greet]. I am [AC], an admission counsellor with Cuemath. Is this a good time for a few minutes?",
          say: ["Use the parent's local time of day for the greeting.", "If it is not a good time, fix a time now and end the call. Do not push."],
          avoid: ["Do not open with 'I am calling to help you enrol'."],
          guardrails: ["time"] },
        { id: "reason", title: "State the reason", goal: "Anchor the call to the evaluation, not to a sale.",
          script: "I am calling to get your feedback on the MathFit evaluation we did for [child] on [date], and to take you through the report and the learning plan the specialist prepared.",
          say: ["Mention the date. It shows you know the file."],
          avoid: ["Do not mention pricing yet."] },
        { id: "feedback", title: "Ask for feedback on the evaluation", goal: "Let the parent talk first. Their words tell you where the call will go.",
          script: "How did the session go from your side? Anything you or [child] particularly liked, or anything that did not sit right?",
          say: ["Listen for: felt like a test, score seemed low, specialist late, technical trouble, child enjoyed it.", "If the parent raises a concern about the eval itself, handle it now from the library (Eval score disputes) before moving on."],
          avoid: ["Do not defend the score. Explain what it measures and what happens next."],
          objections: ["other.eval_dispute", "kid_not_interested.kid", "other.tech"] },
        { id: "report_seen", title: "Did they see the report and plan?", goal: "Find out what you are explaining from scratch and what you are clarifying.",
          script: "Did you get a chance to open the report and the learning plan we emailed after the session?",
          say: ["Yes: \"Is there anything in it you would like me to clarify?\"", "No: \"No problem, I will walk you through it in three minutes. You can open the email while we talk.\""],
          avoid: ["Do not skip the report because the parent says they saw it. Ask what stood out to them."] },
        { id: "report", title: "Explain the MathFit report", goal: "Strengths first, then the areas the specialist flagged, and where those go next.",
          script: "The evaluation looks at four things: fluency, understanding, application and reasoning. [child] did well on [strengths]. The specialist also identified [gaps] as areas to strengthen. Those exact areas go to the coach who is assigned when [child] joins, so the first classes start on what matters, not on a generic syllabus.",
          say: ["Name the strong area first, in the parent's language.", "Name at most two gaps. Make them specific to the report.", "Say explicitly that the gaps are handed to the coach."],
          avoid: ["Do not read the report line by line.", "Do not say 'weak'. Say 'areas to strengthen'."],
          guardrails: ["report"],
          objections: ["other.eval_dispute", "other.curriculum"] },
        { id: "plan", title: "Explain the learning plan and the coach", goal: "Three milestones, one coach, and why we say coach.",
          script: "The plan has three milestones. In the first month the coach breaks the ice with [child] and learns how [child] learns best. By three months the coach brings [child] up to pace on the areas we just talked about. Over twelve months they build ahead together toward the goals we set. We call them a coach and not a teacher or tutor because they work one-on-one with [child] only, toward [child]'s goals, and they stay with [child] through the plan.",
          say: ["Write the goals down with the parent: \"What would you like [child] to be able to do by the end of this school year?\" Repeat it back.", "Mention the parent-teacher conference at 30 days and the quarterly review."],
          avoid: ["Never say teacher or tutor.", "Do not promise grade jumps or timelines beyond the milestones."],
          guardrails: ["coach"],
          objections: ["teacher_fit.meet_coach", "teacher_fit.quality", "time_frequency.once_week"] },
        { id: "questions", title: "Invite questions before enrolment", goal: "Surface every concern now so the payment step is clean.",
          script: "Before we talk about how to get started, what questions do you have? Anything at all, about the coach, the schedule, or how it works week to week.",
          say: ["Handle each concern fully from the library. Confirm it is resolved: \"Does that answer it?\"", "If a spouse is mentioned, offer a joint call at a fixed time."],
          avoid: ["Do not move to pricing with an open concern on the table."],
          guardrails: ["spouse"],
          objections: ["need_to_consult_spouse.spouse", "time_frequency.slots", "comparing_alternatives.shopping", "trust_or_indian_company.india", "already_enrolled_elsewhere.enrolled"] },
        { id: "payment", title: "Present the payment plan", goal: "One recommended plan, one total, one confirmation.",
          script: "You would have seen the plans at the end of the evaluation and in the email. For [child], based on the report, I would recommend the [plan]. That is [total] for [classes] classes over [tenure], which works out to [per_class] a class. It includes the coach, the one-on-one classes, the practice platform, the progress reviews, and our refund and coach-switch guarantee.",
          say: ["Open the Pricing drawer and read from the grid.", "Say the total once, then confirm it back.", "Then stop talking."],
          avoid: ["Do not quote two tenures in one breath.", "Do not mention the platform fee as an afterthought. It is part of the total you state."],
          guardrails: ["grid"],
          objections: ["price.discount", "price.platform_fee", "price.stacking", "payment_flexibility.monthly", "payment_flexibility.lump", "tenure_commitment.long"] },
        { id: "payment_obj", title: "Handle payment objections", goal: "Answer decisively so the parent has no open question on money.",
          script: "",
          say: ["Price: recommend the tenure that fits, do not discount.", "Monthly: explain why plans are upfront, then offer the shorter tenure with the refund guarantee.", "Spouse: joint call, fixed time.", "Comparing: name the difference, offer the 3-month plan as the way to compare for real."],
          avoid: ["Do not concede and close the profile within two minutes of a price objection. Offer the shorter tenure first.", "Do not improvise exceptions. If an exception is needed, say you will check and give a time you will call back."],
          guardrails: ["grid", "ask"],
          objections: ["price.discount", "price.anchor", "payment_flexibility.monthly", "payment_flexibility.card", "tenure_commitment.short", "comparing_alternatives.group_center", "comparing_alternatives.edtech"] },
        { id: "next", title: "Agree the next step", goal: "Every open item gets a date. Every date gets a time.",
          script: "So the next step is [next_step]. Let us fix [followup_date] at [followup_time] your time for that. I will send everything we discussed on WhatsApp so you have it in one place.",
          say: ["Common next steps: pay now, pay via link today, discuss with spouse, decide after school starts, wait for vacation to end, compare one more option.", "Write the date and time into the CRM before the call ends."],
          avoid: ["Do not accept 'I will get back to you' without a date."],
          guardrails: ["date"] },
        { id: "close", title: "Close", goal: "End on a positive, specific note. Pay on the call if the parent is ready.",
          script: "Shall we lock [child]'s coach slot now? I can stay on the line while you complete the payment, it takes about two minutes.",
          say: ["If yes: stay on the call, confirm the plan on screen matches what you said, confirm the charge.", "If not now: pick the outcome below and read the closing line."],
          avoid: ["Do not end with 'let me know'."],
          guardrails: ["ask", "date"],
          outcomes: true }
      ]
    },
    {
      id: "not_reached", title: "Parent not reached", icon: "2",
      subtitle: "No answer, voicemail, or the parent could not talk. Leave one clean message and set the retry properly.",
      steps: [
        { id: "voicemail", title: "Voicemail", goal: "Twenty seconds, one reason, one way back.",
          script: "Hi [parent], this is [AC] from Cuemath. I am calling about [child]'s MathFit evaluation on [date] to share the report and the learning plan with you. I will try you again [retry_time], or you can reach me on this number. Thank you.",
          say: ["Say your name twice: start and end.", "Give a specific retry time."],
          avoid: ["Do not mention pricing, offers or deadlines on voicemail."],
          guardrails: ["cadence"] },
        { id: "whatsapp", title: "WhatsApp message", goal: "Give the parent something useful and one question to reply to.",
          script: "Hi [parent], this is [AC], admission counsellor at Cuemath. I tried calling about [child]'s MathFit evaluation on [date]. The report and learning plan are in your email. When would be a good time for a 10-minute call to go through them together? I am available [windows] your time.",
          say: ["Offer two windows, not an open question.", "Send once. Do not follow up on WhatsApp the same day."],
          avoid: ["No payment link in the first WhatsApp message.", "No 'limited slots' or 'offer ends' language."],
          guardrails: ["cadence", "privacy"] },
        { id: "busy", title: "Parent picked up but cannot talk", goal: "Fix a time in under 30 seconds and get off the call.",
          script: "Of course. When would suit you for ten minutes, today evening or tomorrow? [Wait]. [followup_date] at [followup_time] your time then. I will call you at that time.",
          say: ["Offer two options.", "Confirm the time zone."],
          avoid: ["Do not try to squeeze in the report while they are driving or at work."],
          guardrails: ["time", "date"] },
        { id: "retry", title: "Retry rules", goal: "Persistence without pressure.",
          script: "",
          say: ["One call attempt per day, inside 9 AM to 8 PM local.", "Alternate channel on day two: call, then WhatsApp, then email.", "After three unanswered days, one final message offering to close the file unless they reply, then stop.", "Only the owning counsellor calls. Check the CRM before dialling."],
          avoid: ["No calls from multiple counsellors in one day. Parents called it harassment.", "No same-day repeat calls."],
          guardrails: ["cadence", "one_ac"],
          outcomes: true }
      ]
    },
    {
      id: "followup", title: "Follow-up call", icon: "3",
      subtitle: "You spoke before. Pick up exactly where you left off, address the open item, and close.",
      steps: [
        { id: "recap", title: "Recap in two sentences", goal: "Show you remember the last call. Do not make the parent repeat themselves.",
          script: "[greet], [parent], this is [AC] from Cuemath. When we spoke on [last_date] we went through [child]'s report and the plan, and you wanted to [open_item]. Is now still a good time?",
          say: ["Read your CRM notes before dialling. Name the open item exactly."],
          avoid: ["Do not restart the pitch from the beginning.", "Do not re-run an urgency line the parent has already heard."],
          guardrails: ["one_ac"] },
        { id: "open_item", title: "Address the open item", goal: "One item, resolved, then move to the ask.",
          script: "",
          say: ["Spouse: \"Were you able to discuss it? What did [spouse] think?\" Then handle the concern they raise.", "Need time: \"What would help you decide?\" Offer the 3-month plan as a lower-commitment start.", "Pricing: re-present one plan from the grid. Do not re-open the tenure discussion.", "School restart or vacation: agree a start date and enrol now to hold the coach, or fix the next call date.", "Comparing: ask what they saw, name the difference, offer the 3-month plan as the way to compare for real."],
          avoid: ["Do not offer something new that was not discussed unless it is the shorter tenure."],
          objections: ["need_to_consult_spouse.spouse", "timing_vacation.later", "price.discount", "comparing_alternatives.shopping", "payment_flexibility.monthly"] },
        { id: "payment2", title: "Re-present the plan", goal: "Same plan, same total, one confirmation.",
          script: "So for [child] it is the [plan], [total] for [classes] classes over [tenure]. Shall we lock the coach slot now?",
          say: ["Read from the grid. Same numbers as last time."],
          avoid: ["If the number differs from what you said last time, stop and explain why before continuing."],
          guardrails: ["grid", "ask"],
          objections: ["price.platform_fee", "payment_flexibility.card", "tenure_commitment.short"] },
        { id: "close2", title: "Close", goal: "Payment on the call, or the next date.",
          script: "",
          say: ["Pick the outcome below."],
          avoid: ["If the parent says no clearly, thank them, close the profile, and stop calling."],
          guardrails: ["ask", "date", "cadence"],
          outcomes: true }
      ]
    },
    {
      id: "payment_help", title: "Payment help", icon: "4",
      subtitle: "The parent wants to pay and something is in the way. Fix it on the call.",
      steps: [
        { id: "diagnose", title: "Find out what happened", goal: "Which of the four common problems is it?",
          script: "Tell me exactly what you see on the screen and I will sort it out with you now.",
          say: ["Link does not open or shows a different plan.", "Card declined or bank blocked a large charge.", "Platform fee looks different from what was said.", "Parent is unsure which plan to pick on the page."],
          avoid: ["Do not send a second link before you know what went wrong with the first."] },
        { id: "link", title: "Link or plan mismatch", goal: "Make the page match the words.",
          script: "The plan on your screen should read [plan], [total]. If it shows anything else, do not proceed. I will send the correct link now and stay on the line.",
          say: ["Check the tier, tenure and grade band on the link before sending.", "Confirm the total on the screen matches the grid."],
          avoid: ["Never tell the parent to 'just pick the closest one'."],
          guardrails: ["grid"] },
        { id: "card", title: "Card declined or bank block", goal: "Normal for a large first charge. Give the parent the two fixes.",
          script: "That is common for a first charge of this size. Two things work: approve the transaction in your bank's app or text alert and try again, or use a second card. I will stay on while you do it.",
          say: ["Offer to hold the coach slot for 24 hours if they need to call the bank."],
          avoid: ["Do not suggest splitting the payment as a workaround unless policy allows it."],
          objections: ["payment_flexibility.card"] },
        { id: "fee", title: "Platform fee question", goal: "One number, said once, with what it covers.",
          script: "The platform fee is [fee] for the [tenure] plan. It covers the practice platform, progress reports and the parent app. It is included in the [total] I gave you, there is nothing added on top.",
          say: ["Read the fee from the grid. If the grid says TODO, do not guess. Say you will confirm in writing within the hour."],
          avoid: ["Do not describe it as 'small' or 'nominal'."],
          guardrails: ["grid"],
          objections: ["price.platform_fee"] },
        { id: "confirm_pay", title: "Confirm and close", goal: "Confirm the charge and what happens next.",
          script: "The payment shows as complete on my side for [total]. You will get the confirmation email now, and the coach's profile and first-class time follow within [sla]. Anything you need, message me on this number.",
          say: ["Read back the amount charged."],
          avoid: ["Do not end before the confirmation email is acknowledged."],
          outcomes: true }
      ]
    },
    {
      id: "onboarding", title: "Onboarding and scheduling", icon: "5",
      subtitle: "The parent has paid. Confirm the coach, set the schedule, and make the first class certain.",
      steps: [
        { id: "coach", title: "Confirm the coach", goal: "Who, why this coach, and what the first two classes are for.",
          script: "[child]'s coach is [coach_name]. The specialist matched them based on the report, especially [gaps]. The first two classes are for [child] and the coach to settle in. If it does not feel right after those, we switch the coach at no cost.",
          say: ["Name the coach. Give one reason for the match from the report.", "Check the coach name in the CRM before you say it."],
          avoid: ["Never read a coach profile that belongs to another child. Check the record.", "Do not describe the coach as a teacher or tutor."],
          guardrails: ["coach", "privacy"],
          objections: ["teacher_fit.specific", "teacher_fit.quality"] },
        { id: "slots", title: "Set the schedule", goal: "Two fixed weekly slots in the parent's time zone.",
          script: "Which two days work every week, and what time in [parent_tz]? I will set them now so the coach's calendar is fixed for [child].",
          say: ["Say the time zone out loud when confirming.", "Offer the pause and reschedule rule once: classes can be moved with 24 hours' notice."],
          avoid: ["Do not leave the schedule for the coach to sort out later."],
          objections: ["time_frequency.slots", "time_frequency.more"] },
        { id: "first_class", title: "First class expectations", goal: "Tell the parent what the first class is and is not.",
          script: "The first class on [first_class_date] is about the coach and [child] getting comfortable and picking up from the report. You will get a short note after it. The parent-teacher conference is at 30 days, and then every quarter.",
          say: ["Mention homework rhythm and the practice platform briefly."],
          avoid: ["Do not promise visible improvement in the first month."] },
        { id: "setup", title: "App and device setup", goal: "Remove the two technical failures seen on calls.",
          script: "Please open the Cuemath app on the device [child] will use and make sure screen sharing works. On an iPad, allow screen recording for the app in Settings. If anything does not work, message me and we will test before the first class.",
          say: ["Offer a five-minute test call before the first class."],
          avoid: ["Do not leave setup to be discovered in the first class."],
          objections: ["other.tech"] },
        { id: "sibling", title: "Sibling or referral", goal: "Ask once, clearly.",
          script: "Does [child] have a sibling who might also benefit? The sibling benefit is [sibling_benefit]. And if you know a family who would value this, the referral benefit is [referral_benefit].",
          say: ["Read both benefits from the grid rules. Do not improvise numbers."],
          avoid: ["Do not stack benefits in a way the grid does not allow."],
          guardrails: ["grid"],
          objections: ["price.stacking"] },
        { id: "wrap", title: "Wrap up", goal: "Everything confirmed in writing.",
          script: "I will send a WhatsApp summary now: coach, schedule, first-class date, and my number. Welcome to Cuemath, [parent].",
          say: [],
          avoid: [],
          outcomes: true }
      ]
    }
  ]
};

/* ---------- Objection library ----------
   Generated from 479 transcribed post-eval calls (Aug 1-Sep 1 2026). Each sub-objection has:
   verbatims  = what parents actually said
   draft      = DRAFT answer for the admissions lead to rewrite
   dont       = what to avoid, from the calls that lost the parent
   best       = strongest real responses (anonymised, objection-handling score 1-5)
   avoid      = real responses that left the objection unresolved
   ---------------------------------------- */
window.CONTENT.objections = {
 "price": {
  "label": "Price",
  "subs": {
   "discount": {
    "label": "Asks for a discount / lower price",
    "n": 81,
    "verbatims": [
     "Will there be no additional discount as an existing customer?",
     "Okay, anything you guys can do on pricing?",
     "I think when the price is a little too high for me... I'm still not comfortable with 165 if you can bring it down",
     "anything like construction[reduction] and discount everything?"
    ],
    "draft": "I understand, and I want to be straight with you: our pricing is the same for every family, so there is no discount I can add. What I can do is make sure you are on the right plan. If the yearly amount is the concern, the 3-month plan gives [child] the same coach and the same programme for [total_3m], and you can renew after you have seen the progress. Would that work better?",
    "dont": "Never say 'let me check what I can do' on price. Never move to closing the profile within two minutes of a price objection.",
    "best": [
     {
      "score": 5,
      "response": "Recommended the shorter 3-month tenure to reduce commitment, then guided toward the Basic plan matching [child] foundational needs rather than upselling."
     },
     {
      "score": 4,
      "response": "Explained prices were standardized last December across all US states to avoid parent-to-parent pricing conflicts."
     },
     {
      "score": 4,
      "response": "Held firm on no standardized discounting, offered a 1-month trial with pro-rated refund instead of a discount."
     }
    ],
    "avoid": [
     {
      "response": "Explained standardized no-discount pricing, emphasized value beyond the tutor (platform, coaches, games, assessments all included), the refund policy, and the pedagogical rationale for shorter, higher-productivity class durations"
     },
     {
      "response": "Explained the per-session/platform-fee breakdown and noted the platform fee is waived only on a 12-month upfront plan, which the parent had already ruled out; held firm on the monthly-plan price as the best offer"
     }
    ]
   },
   "class_length": {
    "label": "Class length vs price (40 vs 55 min)",
    "n": 27,
    "verbatims": [
     "Can you do the 12-month price ($1560) but let me pay in 3-month installments?",
     "what is the best pricing that you can offer for three months",
     "I don't think I'm prepared to pay $25 an hour for the session, because this is the first time we're trying. And I want to make sure that it remains affordable.",
     "I'm just skeptical of paying so much money in advance... if it was like three or four months I would have done it but it's like a whole year."
    ],
    "draft": "The Basic plan is 40 minutes and the Standard plan is 55 minutes, and that is the only difference in what happens in class. The coaches are equally qualified. For [child]'s grade the specialist recommended [tier] because [reason].",
    "dont": "Do not imply Basic gets a lesser coach.",
    "best": [
     {
      "score": 4,
      "response": "Explained the no-lock-in, cancel-anytime refund policy, and offered a 3-month/26-class/$650 plan as a shorter commitment."
     },
     {
      "score": 4,
      "response": "I am definitely giving you the best price possible, which is there."
     },
     {
      "score": 4,
      "response": "No monthly payment option available, but got finance approval for a 3-month plan (26 classes, $650) as the shortest offered tenure."
     }
    ],
    "avoid": [
     {
      "response": "Cannot offer 12-month pricing on a 3-month payment; can renew into 12 months at same $1560 rate after the 3-month term if satisfied."
     },
     {
      "response": "I will check on this. As you mentioned [child] is in grade six... I will check this with the team as well."
     }
    ]
   },
   "platform_fee": {
    "label": "Platform fee surprise",
    "n": 20,
    "verbatims": [
     "platform fee if you can wave up that",
     "Nobody gives this platform fee. I know you told me you'll waive off for this one.",
     "Can I mean, can you take off the technology free or that one?",
     "I told them what I'm looking is $11 per hour if you can make those changes and adjustments, then we can go ahead, otherwise it's too costly."
    ],
    "draft": "The platform fee is [fee] for the [tenure] plan and it is already inside the [total] I gave you. It covers the practice platform, the progress reports and the parent app. There is nothing added on top of that number.",
    "dont": "Do not describe the fee as small or nominal. Do not quote a different fee on a later call.",
    "best": [
     {
      "score": 4,
      "response": "Confirmed platform fee waived for this enrollment."
     },
     {
      "score": 4,
      "response": "Platform fee is only waived on the 12-month plan; explained the coaching-fee vs platform-fee breakdown and the pro-rata refund policy in detail"
     },
     {
      "score": 4,
      "response": "Confirmed the $90 platform fee is one-time (at first enrollment), and that the 12-month plan carries no platform fee at all and is more cost-effective at $15/class."
     }
    ],
    "avoid": [
     {
      "response": "There is no way to waive off the platform fee, it applies to everybody."
     },
     {
      "response": "Platform fee is mandatory and one-time, covers Math Gym activities and downloadable ebooks; not waivable."
     }
    ]
   },
   "anchor": {
    "label": "Anchors on a competitor's or friend's per-class rate",
    "n": 15,
    "verbatims": [
     "Standard, if I end up for a yearly is $20 per class and I should be paid in two months. How much it can pay that one?",
     "if I am paying around 19 dollars ... 90 dollars I am paying per class for his other session. So even online also if it is same price then yeah I have that concern actually.",
     "my only concern was that fee, so is it possible for you to make it for $15 per month?",
     "I have seen it when the class ended. I have seen it on the website. It says $20 but when I saw first on your website, it said $15 per class."
    ],
    "draft": "A private tutor at the same hourly rate gives you the hour. Here the hour comes with a coach matched to [child]'s report, a plan with milestones, the practice platform between classes, progress reviews, and a refund if it is not working. That is what the per-class figure buys. If you want to compare properly, the 3-month plan is the fair way to do it.",
    "dont": "Do not argue that the other option is bad. Do not match a competitor's number.",
    "best": [
     {
      "score": 5,
      "response": "Explained the pricing/duration discrepancy likely came from an untrained volunteer at the offline event, not Cuemath staff, and confirmed the evaluation-session figures are accurate."
     },
     {
      "score": 3,
      "response": "Initially defended the higher tier as necessary for grade-6 content, then reversed and agreed to honor the original $15/session pricing while still covering grade 6 material."
     },
     {
      "score": 3,
      "response": "Quoted 3/6/12-month options ($489/$884/$1560), explained there is no lock-in and a pro-rated refund policy."
     }
    ],
    "avoid": [
     {
      "response": "pricing is fixed from our end...those are non-negotiable prices"
     },
     {
      "response": "the payment to be honest is they are really fixed right but as we're ending the month right I can definitely get you a month of extra classes added on but nothing more than that"
     }
    ]
   },
   "stacking": {
    "label": "Referral / sibling benefit expectations",
    "n": 9,
    "verbatims": [
     "I'm still wondering for the price... you recently said that you changed the price where it seems on a higher side for us... I don't think I want to go ahead with 18.5 at this point in time.",
     "Is that the final pricing, like $20 per session if I choose 12 months?",
     "It's like more than one year fees for a kid, right?",
     "I remember there were some plans or some referral... cost per session was around $18."
    ],
    "draft": "The sibling benefit is [sibling_benefit] and the referral benefit is [referral_benefit]. They are set by the plan you choose today, not by what another family received on an older plan. Let me tell you exactly what [child] gets so there is no confusion later: [exact].",
    "dont": "Do not promise both benefits in full without checking the rule. Do not mention what another family was given.",
    "best": [
     {
      "score": 4,
      "response": "Confirmed the fixed pricing policy with no parent-to-parent variance, but offered a referral benefit if she knows another enrolled Cuemath family."
     },
     {
      "score": 3,
      "response": "AC justified the pricing as US-standard, highlighted the referral bonus and personalized 1:1 tutor, and reiterated the flat $2652 total."
     },
     {
      "score": 3,
      "response": "Applied a referral benefit (8 extra classes) that brought the effective rate down to $18.5/session on the 12-month plan."
     }
    ],
    "avoid": [
     {
      "response": "Cited a referral-adjusted per-class rate (~$18.5, $2,080/112 classes) and pitched extra value: the annual plan covers 13 months' worth of content so the child could get ahead to the next grade level and prep for honors/high-cap programs."
     },
     {
      "response": "Explained the 12-month plan can't be split evenly in half by price, offered sibling bonus classes as a partial offset, then said he'd 'search and find out if this is possible' on matching $1040."
     }
    ]
   }
  }
 },
 "payment_flexibility": {
  "label": "Payment flexibility",
  "subs": {
   "monthly": {
    "label": "Wants monthly / month-to-month",
    "n": 58,
    "verbatims": [
     "My major concern is that we can't pay for upfront for 12 months... upfront payment is too much for us right now, we just moved from Canada to States.",
     "I wanted to pay monthly... Oh, you don't do like twice payment or divided in three or something?",
     "It's just an overseas thing. I'm paying you guys, I don't know who to call for that. You know what I'm saying? It's just a very long hassle.",
     "the way you guys do the payments, that's what I don't like. I don't have money for that... I don't have money to pay up front"
    ],
    "draft": "Plans are paid once because the coach is reserved for [child] for the whole tenure and the plan is built around the 3 and 12-month milestones. There is no monthly option. If a single payment is the difficulty, the 3-month plan brings the amount down to [total_3m], and if it does not work out you get a pro-rated refund on unused classes.",
    "dont": "Do not say 'I will get an exception' unless you have one. Do not offer unrelated consolations like free workbooks.",
    "best": [
     {
      "score": 5,
      "response": "Clarified it was a financial (not commitment-length) concern and suggested a 6-month or 3-month plan instead of the 12-month lump sum."
     },
     {
      "score": 4,
      "response": "Clarified the process for raising requests is simple and reiterated the shorter 3-month option to reduce risk."
     },
     {
      "score": 4,
      "response": "I would get an exception for Amayra and request the team so we can offer a 3-month plan of $489 for 26 classes."
     }
    ],
    "avoid": [
     {
      "response": "No month-to-month payment option; standardized fee structure with only 3-month/6-month/12-month upfront tiers."
     },
     {
      "response": "The payment is one time for any of the plan you pick."
     }
    ]
   },
   "card": {
    "label": "Card / bank blocked the charge",
    "n": 7,
    "verbatims": [
     "But for Aslan if I pay you, it would be for Aslan, how can I get discount then?... I don't want to pay twice",
     "No, I prefer not to do it right now. I need to think about it. I prefer to do it by myself and not over the phone.",
     "it would be like helpful to try a few classes before we register but I heard it's not an option to try before we signed up or pay",
     "I was told that if I pay, even if I pay annual subscription and after four classes or three classes, I don't like it, I will be given money back"
    ],
    "draft": "That is common for a first charge of this size. Approve the transaction in your bank's app or the text alert and try again, or use a second card. I will stay on the line, and I can hold the coach slot for 24 hours if you need to call the bank.",
    "dont": "Do not treat a card decline as a price objection.",
    "best": [
     {
      "score": 3,
      "response": "Confirmed no lock-in period, can cancel any time and get a refund."
     },
     {
      "score": 3,
      "response": "Clarified extra sessions can be scheduled within the chosen plan (deducted from total) or a 3-sessions/week plan gives more total classes; standard fee structure has no ad-hoc add-ons."
     }
    ],
    "avoid": [
     {
      "response": "No, only USD via a US debit or credit card is supported."
     },
     {
      "response": "Attempted to explain that enrolling both kids creates two separate IDs paid at different times, but the explanation was circular and confusing"
     }
    ]
   },
   "lump": {
    "label": "Upfront lump sum too large",
    "n": 3,
    "verbatims": [
     "I don't want to invest $1,500 upfront and then ask for money later on.",
     "Can you take the amount from my side for one or two classes and give me the demo classes?",
     "can they be like a two or three payment for that?"
    ],
    "draft": "I understand a single amount feels large. Two things help: the 3-month plan at [total_3m], and the refund guarantee, which means the money is only committed for classes [child] actually takes.",
    "dont": "Do not repeat the refund policy as the only answer. Offer the shorter tenure first.",
    "best": [],
    "avoid": [
     {
      "response": "The payment is upfront, but we have a refund guarantee; let's discuss further once you are back."
     },
     {
      "response": "Said this isn't possible — full plan payment is required upfront, though first two sessions are refundable if the coach isn't a fit."
     }
    ]
   },
   "split": {
    "label": "Wants to split / instalments",
    "n": 1,
    "verbatims": [
     "the payment option is can we have a break payment?"
    ],
    "draft": "We do not split a plan into instalments. The nearest option is the shorter tenure: [total_3m] for three months now, and renewal after that. Would that help?",
    "dont": "Do not improvise a split. If a policy exception exists, say you will confirm in writing by a set time.",
    "best": [],
    "avoid": [
     {
      "response": "Confirmed these are upfront subscription payments only, no installment option."
     }
    ]
   }
  }
 },
 "tenure_commitment": {
  "label": "Tenure commitment",
  "subs": {
   "long": {
    "label": "12/6 months feels too long",
    "n": 52,
    "verbatims": [
     "we have come to a conclusion that maybe we can start with a one month initially and then we can start with a two month plan... gradually we can extend it to three months or six months",
     "I think you only have two payment options either half yearly or yearly. Are there anything like quarterly or any other plans available monthly?",
     "is there a one month plan I want to give it a try? I don't want to be committing so much money without knowing how these things are running.",
     "I do not want to pay upfront for six months of a one year... I've never done that ever in my life and I don't want to do it either in the future"
    ],
    "draft": "Twelve months is the plan built around the third milestone, but you are not locked in. Unused classes are refunded pro-rata, and you can pause for travel or exams. If you would rather start smaller, the 6-month plan covers the first two milestones and you can extend later.",
    "dont": "Do not describe 12 months as 'the only real option'.",
    "best": [
     {
      "score": 5,
      "response": "AC made a one-off exception to activate the 3-month plan ($650 + $45 platform fee = $695 for 26 classes) even though the standard site only lists 6/12-month tenures."
     },
     {
      "score": 4,
      "response": "Clarified there is no monthly plan — only 3, 6, and 12-month tenures — and reassured the parent with a cancellation policy if the 3-month plan doesn't work out."
     },
     {
      "score": 4,
      "response": "Offered a month-to-month plan with no obligation to move to a longer tenure, fully flexible based on how classes go"
     }
    ],
    "avoid": [
     {
      "response": "Confirmed no monthly option exists, only 3/6/12-month plans, but reiterated no lock-in and cancel-anytime refund policy."
     },
     {
      "response": "Offered a one-time exception 3-month plan at $650/26 classes but held firm on the standard fee-ladder pricing (no per-session discount for shorter tenure)."
     }
    ]
   },
   "short": {
    "label": "Wants 1 or 3 month option",
    "n": 12,
    "verbatims": [
     "Can we do one month and see how it goes?",
     "if I now it's almost September... still next September I do QMAT... So we have summer break. So those two months are gone.",
     "Can I pause? ... I don't want to have the classes also that time.",
     "do you guys have anything where we can like you know do like a like a one month trial and see how it goes?"
    ],
    "draft": "A 3-month plan is available: [total_3m] for 26 classes. It gets [child] through the first milestone and the start of the second, and you decide about continuing with the progress in front of you.",
    "dont": "Do not deny the 3-month plan exists. It has been quoted on many calls; check the grid.",
    "best": [
     {
      "score": 5,
      "response": "Agreed to flexibly accommodate extra/catch-up sessions within the existing plan capacity"
     },
     {
      "score": 4,
      "response": "Confirmed a flexible, pro-rata refund policy."
     },
     {
      "score": 4,
      "response": "Quoted the 3-month plan ($650 + $45 platform fee, 26 classes) as the flexible shorter option"
     }
    ],
    "avoid": [
     {
      "response": "Explained pause units for planned absences, rescheduling within the week, and refunds for unused classes, but confirmed sessions cannot be extended beyond the tenure."
     },
     {
      "response": "(cut off by audio issues before a full answer was given; conversation moved to WhatsApp)"
     }
    ]
   }
  }
 },
 "teacher_fit": {
  "label": "Teacher / coach fit",
  "subs": {
   "meet_coach": {
    "label": "Wants to meet / trial the actual coach first",
    "n": 23,
    "verbatims": [
     "I just want to know about the teacher, like how long she is working with the kids.",
     "Can I have a sample session with the teacher?",
     "I would really appreciate if I can beforehand have a little session with the teacher before I pay... even if it's a 30 minute session",
     "I want to see how the teacher is going to teach... before enrollment, not after enrollment... I don't want to start if not liking anything."
    ],
    "draft": "The coach is matched to [child] from the report, and the first two classes are exactly for that fit check. If after those two you feel it is not right, we switch the coach at no cost, and the classes are not counted. Here is what I can tell you about the coach now: [coach_detail].",
    "dont": "Do not repeat 'first two classes are the trial' as the only answer. Give concrete coach detail: experience, years with Cuemath, students taught.",
    "best": [
     {
      "score": 5,
      "response": "Explained the new model: specialist assigns a coach based on the eval, and parent gets 2 free observation classes with that coach before paid classes count, with a free swap if it's not a fit."
     },
     {
      "score": 5,
      "response": "Reassured every coach meets the same vetting bar, offered free coach-switch within first 2 (or up to 8) classes if not the right fit"
     },
     {
      "score": 4,
      "response": "Described the mapped teacher's 9 years experience, 3-4 years teaching in the US, 4 years with Cuemath, 650+ students taught; noted first two classes are trial with a 24-hour teacher-change option."
     }
    ],
    "avoid": [
     {
      "response": "No trial with the assigned coach is offered; if unhappy within the first 2 classes the coach can be switched (with those 2 classes credited), and a full refund guarantee exists for unused classes since 2013"
     },
     {
      "response": "Reassured the parent that classes would be fun learning, not like a regular school class, and that the assessment felt less engaging only because it was a pure assessment."
     }
    ]
   },
   "specific": {
    "label": "Wants a specific / same / female coach",
    "n": 23,
    "verbatims": [
     "I need like the same [teacher/picture] as what my elder son was going through.",
     "if I don't like the teacher... What are your options for us?",
     "It puts a worry in my head about if she's going to be too much knowledgeable, too much more than what [child] can grasp because she is only 11 years old.",
     "She is not comfortable with a male teacher. She wants a female teacher."
    ],
    "draft": "I will note the preference for [preference] and pass it to the matching team. If the requested coach's calendar does not fit [child]'s slots, we match the closest fit and you keep the two-class switch guarantee.",
    "dont": "Never explain why a coach is unavailable using internal reasons such as pay or grade tiers.",
    "best": [
     {
      "score": 5,
      "response": "Agreed to find and assign a female teacher who fits the child's profile via the teacher-mapping team; offered to swap teacher after first two classes if needed."
     },
     {
      "score": 4,
      "response": "Explained coach-matching process from the evaluation, offered first two sessions to judge fit, and a no-penalty coach change policy for early sessions."
     },
     {
      "score": 4,
      "response": "After registration, if unsatisfied with the assigned coach after two sessions, those sessions are provided free of cost and the coach is changed; this repeats until satisfied."
     }
    ],
    "avoid": [
     {
      "response": "AC explained that delaying registration risks losing the mapped teacher/slots and reassignment to another teacher."
     },
     {
      "response": "Explained the coach was assigned based on eval findings and track record, and that the first two classes are free/credited back and reassignable if not a fit."
     }
    ]
   },
   "quality": {
    "label": "Coach qualifications / experience / Basic vs Standard",
    "n": 12,
    "verbatims": [
     "Make sure we need the perfect teacher... make sure they're like experienced one.",
     "He is a little different... regarding the accent regarding the connectivity communication.",
     "We don't have any experience with Q Math, right? With any tutor... he is new for us also. So if we register end of the month also, there is not much difference. We can change it after one month also right?",
     "I thought there would be a less qualified people will be assigned... coaches will be assigned for the basic and for standard will be a will be more qualified"
    ],
    "draft": "Every coach is a full-time Cuemath coach, trained for eight weeks on the US curriculum, with a minimum of five years' experience. Basic and Standard differ only in class length and the grades they are licensed for, not in coach quality. You can see the coach's profile in the parent app after matching.",
    "dont": "Never say a plan gets 'less qualified' coaches.",
    "best": [
     {
      "score": 5,
      "response": "Clarified all coaches are equally qualified; the only difference between Basic and Standard is session length and grade-level licensing, not teacher quality."
     },
     {
      "score": 4,
      "response": "AC described coaches as full-time, 8-10 year experienced Cuemath employees, and explained the process to request a coach change if needed."
     },
     {
      "score": 4,
      "response": "Assigned coach has experience with native US/Canada students of the same grade; parent can change tutor anytime after two free sessions."
     }
    ],
    "avoid": [
     {
      "response": "AC reiterated the standard policy without offering an extension or alternative to hold the coach."
     }
    ]
   }
  }
 },
 "time_frequency": {
  "label": "Time and frequency",
  "subs": {
   "once_week": {
    "label": "Wants 1x/week (activities, workload)",
    "n": 24,
    "verbatims": [
     "Right now, my daughter is going through a lot of other classes... is there any way we can do one class a week and then get started from there?",
     "I only wanted one day a week because we have other activities for RLM planned... I would like to start him with one class a week",
     "I wanted like one class per day if you are talking about if you can make a one class per day please will continue otherwise will drop the call now.",
     "he's actually still in first grade and he's enrolled in many other curricular activities. So I just don't want to burden him with anything more right now"
    ],
    "draft": "Two classes a week is the minimum we have seen work, because a week between classes loses most of what was built. Both classes can be on the same day with a gap, or on the weekend. If [child]'s activities make this impossible right now, let us fix a start date when they can, and hold the coach.",
    "dont": "Do not offer once a week as a standard option. Do not lose the parent over it either: offer the same-day or weekend pattern, or a later start.",
    "best": [
     {
      "score": 4,
      "response": "I completely understand your concern. When you proceed for payment it will ask you to confirm your slots also, so you can select any other day and time."
     },
     {
      "score": 4,
      "response": "Explained one session/week does not show meaningful progress and recommended a minimum of two sessions/week given the grade 2-to-3 curriculum gap; offered to start with a shorter 6-month tenure as a trial."
     },
     {
      "score": 4,
      "response": "Explained two sessions/week are recommended based on past outcomes but offered to start with one session and move to two next month."
     }
    ],
    "avoid": [
     {
      "response": "Explained why two classes/week is the observed minimum for homework follow-through; suggested doing both classes on the same day with a gap; ultimately said policy requires 2/week minimum."
     },
     {
      "response": "We do have two sessions a week, but what I can do is you can start off with a smaller duration."
     }
    ]
   },
   "slots": {
    "label": "Slot / time-zone / evening availability",
    "n": 18,
    "verbatims": [
     "Can I do this? Like, can I purchase it for 12 months but use it like TV three times a week and use as I like?",
     "I take 2 days per time. How can I reach to you when the class starts? ... it's the days and timings which you have not finalized yet.",
     "I'm waiting on my daughter school schedule and based on her schedule I would like to set up the QMAT... probably in a week or so I'm expecting to receive her schedule and then I can plan accordingly.",
     "we are actually looking forward to it, but we are just waiting for this week... by Saturday or by Monday, next Monday, we'll be making the payment."
    ],
    "draft": "Tell me the two windows that work every week in your time zone and I will check the coach's calendar now. If those slots are not available with this coach, we match a coach who has them.",
    "dont": "Do not leave slots for 'the coach to sort out later'.",
    "best": [
     {
      "score": 5,
      "response": "If you want to start, we will start after November... we can definitely connect back in November"
     },
     {
      "score": 4,
      "response": "Explained frequency can be adjusted month to month with the same teacher (e.g., 2 classes/week one month, 3 the next) directly with the tutor."
     },
     {
      "score": 4,
      "response": "Explained they can enroll now and start classes later (hold the coach/lock slots) rather than waiting to pay, to avoid losing the slot to another parent."
     }
    ],
    "avoid": [
     {
      "response": "No worries, thank you so much for letting me know. So by when do you want to get in touch?"
     },
     {
      "response": "Suggested proceeding with enrollment first, then setting the proper time slot, offering classes could start Monday."
     }
    ]
   },
   "more": {
    "label": "Wants 3x/week or flexible frequency",
    "n": 13,
    "verbatims": [
     "I need to exactly fix two hours a week... she's already about to start two more classes in September, I can't commit to timings yet.",
     "He's fully booked — swimming, soccer, art class, reading class, and already going for math class.",
     "I already have three days occupied. So it's like two more two days means all the five days he would be like nothing else to do...he has chess and soccer...and swimming",
     "Can we try for one month? I'm not sure if my son will be able to sit for that long hours online."
    ],
    "draft": "Yes, you can schedule extra classes inside the plan, for example before a test or to catch up after a holiday, as long as the total classes are within the plan. Three a week is possible with the same coach.",
    "dont": "Do not sell extra frequency as a way to finish faster if it does not fit the milestones.",
    "best": [
     {
      "score": 4,
      "response": "Shortest available tenure is 3 months, but comes with a refund policy if the child can't cope — de-risked as a trial."
     },
     {
      "score": 4,
      "response": "Yeah that is the policy in which we can start later and I'll guide you how to set the date for the same"
     },
     {
      "score": 4,
      "response": "Bare minimum is 2 classes/week; 3 classes/week possible only if teacher has availability, same price either way."
     }
    ],
    "avoid": [
     {
      "response": "Acknowledged, no immediate resolution proposed."
     },
     {
      "response": "I think are you aware about the class duration everything it's going to be 40 minutes right so it's not possible to matter"
     }
    ]
   }
  }
 },
 "comparing_alternatives": {
  "label": "Comparing alternatives",
  "subs": {
   "shopping": {
    "label": "Still shopping around / wants to compare",
    "n": 19,
    "verbatims": [
     "My sister was saying her money was locked with you guys. That's why I am worried.",
     "I've seen how you guys operate your own. So let me see how other people do that... I also want to see how other people do their own.",
     "I just talked to other one they told like they will give 10 to 12 dollars something per session. So I want to see there too how it will be.",
     "I'm evaluating many other options as well... I have done demonstration classes for a couple of other providers too."
    ],
    "draft": "That is sensible. May I ask what you are comparing on? [Listen.] On that point, here is where we stand: [difference]. Shall we fix a call on [followup_date] once you have seen the others, and I will hold the coach slot till then?",
    "dont": "Do not push for a decision before the parent has compared. Get the date.",
    "best": [
     {
      "score": 5,
      "response": "Named competitors transparently and differentiated Cuemath's personalized, one-on-one curriculum and conceptual depth"
     },
     {
      "score": 4,
      "response": "Since this is 1-on-1, the coach can flexibly move [child] to advanced or next-grade curriculum whenever he's ready, unlike a group class."
     },
     {
      "score": 4,
      "response": "I have to make sure that he's a good fit for him... my job is to really understand your requirement and map your classes accordingly... not as a sales or a marketing person."
     }
    ],
    "avoid": [
     {
      "response": "Acknowledged, asked if there was a specific unmet need, offered to follow up Monday for a decision."
     },
     {
      "response": "Acknowledged the parent should compare with other institutes if pricing is the main concern; reiterated the coach hold cannot stay open indefinitely."
     }
    ]
   },
   "group_center": {
    "label": "Kumon / Mathnasium / RSM / in-person centre",
    "n": 13,
    "verbatims": [
     "I've inquired at other places, like RSM (Russian School of Math), which is very popular in the Bay Area — they do one class a week, but classes are 50 min to an hour.",
     "I am shopping around... Kumon being one of them, Banjoo being another, Cuemath being the third and then another private tutor as the fourth option",
     "My preference is offline. We have Kuman, we have Gideon and we have Best Friends.",
     "I do not know, compared with other classes, how would be the two mathists behind us."
    ],
    "draft": "Centres like Kumon or Mathnasium work in groups on a fixed sequence of worksheets. Here [child] has one coach, and the plan starts from [child]'s report, so the time goes to [gaps] rather than to a queue. If you want to see the difference for real, the 3-month plan is the honest comparison.",
    "dont": "Do not criticise the other provider. Name the structural difference and stop.",
    "best": [
     {
      "score": 4,
      "response": "Highlighted Cuemath's 1:1 model versus Kumon/Banjoo's group settings, citing feedback from parents who switched after those competitors expanded group sizes beyond what was promised"
     },
     {
      "score": 3,
      "response": "Cuemath's methodology (puzzles, quizzes) differs from Kumon/Mathnasium's repetitive approach."
     }
    ],
    "avoid": [
     {
      "response": "Acknowledged, reiterated Cuemath's 40-min session length and personalization but did not match the 1x/week option."
     },
     {
      "response": "I will be assigning you the same [best] coach for [child]... I can check the profile for the coach for you to review."
     }
    ]
   },
   "edtech": {
    "label": "BYJU'S / other online platform",
    "n": 9,
    "verbatims": [
     "Banjoo is scheduled for tomorrow and I would like to know like what are your prices... what is the difference between you guys and... is it a different curriculum or the way of teaching is different?",
     "I know my friend is currently paying $13 per hour.",
     "The other company also gave me a very concrete thing... I'm inclined to the other company right now, because it's a lot of savings, and the teachers/coach worked directly with the students, they liked the teacher.",
     "I have spoken to Banzu and also Bright Champs... Knowledge appraise also offered one-on-one sessions and they were doing a good price as well."
    ],
    "draft": "Most online platforms teach in small groups or with rotating tutors. Here it is one coach for [child] through the plan, and the coach starts from the evaluation report you already have. That is the difference you will notice in month one.",
    "dont": "Do not get into price comparisons you cannot verify.",
    "best": [
     {
      "score": 4,
      "response": "Explained Cuemath's one-on-one personalized conceptual-mastery model versus the competitor's small-group mental-math/arithmetic focus."
     },
     {
      "score": 4,
      "response": "Warned that this competitor's small-class promise tends to expand to 5-6 students per session, cited refund/platform complaints, suggested checking reviews."
     },
     {
      "score": 3,
      "response": "Said Cuemath classes are different in approach/quality from the coding classes and suggested checking Trustpilot-style reviews."
     }
    ],
    "avoid": [
     {
      "response": "Looked up the friend's account and explained she enrolled in 2021 at older pricing, which no longer applies."
     },
     {
      "response": "We have a refund guarantee. I understand cost is an important factor, but I'm sure if you compare the quality of classes and the customized approach, it's going to be worth every single penny. Take a couple of classes and see if it works out."
     }
    ]
   },
   "private": {
    "label": "Private / local tutor",
    "n": 6,
    "verbatims": [
     "I'm talking to some more people, you know, child classes there. They said they have a month to month program and like 10 weeks program.",
     "Out of nine, top one was QMAT and second one was Tutor... if I'm saving 1500 straight away right now",
     "We found someone... an independent tutor... following the same common core curriculum... the pricing was very good. It was like $12 per hour.",
     "We are also considering [a competitor] and they are giving classes for $415... they have come down to that rate."
    ],
    "draft": "A good private tutor and a Cuemath coach do similar things in the hour. What you add here is the report-driven plan, the practice platform between classes, progress reviews at 30 days and quarterly, and the coach-switch and refund guarantees. If you have a tutor you trust, the 3-month plan is a fair way to compare.",
    "dont": "Do not dismiss the tutor.",
    "best": [],
    "avoid": [
     {
      "response": "Highlighted the sibling benefit (two free months for the second child) as added value."
     },
     {
      "response": "Okay, you're still deciding."
     }
    ]
   }
  }
 },
 "need_to_consult_spouse": {
  "label": "Needs to consult spouse",
  "subs": {
   "spouse": {
    "label": "Needs to discuss with spouse / family",
    "n": 40,
    "verbatims": [
     "I'll discuss with my husband and come get back to you.",
     "Let me discuss it with my wife and also how comfortable [child] is. Based on that I'll let you guys know whether we want to proceed or not.",
     "I will ask my husband like what he thinks",
     "So I have some numbers... so I have to talk to my wife again and see if there are options for us."
    ],
    "draft": "Of course. Would it help if I walked you both through the report and the plan together? It takes ten minutes. What time works for both of you, [option_1] or [option_2]?",
    "dont": "Do not accept 'I will discuss and get back'. Offer the joint call and fix the time.",
    "best": [
     {
      "score": 4,
      "response": "No problem mom, whenever sir is back I can schedule a call back for you and walk you through the complete eval."
     },
     {
      "score": 4,
      "response": "Agreed and continued the pricing discussion directly with the husband."
     },
     {
      "score": 3,
      "response": "Agreed to reconnect tomorrow after parent discusses with spouse."
     }
    ],
    "avoid": [
     {
      "response": "Please, please do. Please speak with your wife, because we do not have any other additional discounts on top of that."
     },
     {
      "response": "Agreed to escalate the missing report issue and offered ongoing support via WhatsApp."
     }
    ]
   }
  }
 },
 "timing_vacation": {
  "label": "Timing and vacation",
  "subs": {
   "later": {
    "label": "Start later (school, next month, exams)",
    "n": 20,
    "verbatims": [
     "We just don't want to hurry up... maybe if you can wait say a week or so and then take the decision accordingly.",
     "He is also in the best brains right now for the till August so I just want to talk with them and I just want to release from the best brains... I just want to push it to September.",
     "Not possible right now, I will contact you in a couple of months... till September 15th he has tournaments.",
     "He has a couple of tournaments in this month and the next... maybe I will get back to you in a couple of months."
    ],
    "draft": "We can set the start date for when school settles, and enrolling now holds the coach for [child]. If you would rather decide then, let us fix [followup_date] for the next call and I will send you everything in writing.",
    "dont": "Do not create false urgency about slots you are not actually holding.",
    "best": [
     {
      "score": 4,
      "response": "It's a genuine expectation to think and make the wise decision before hurrying up or jumping and taking the incorrect decision."
     },
     {
      "score": 4,
      "response": "Understood the concern and agreed a September 2nd start date works."
     },
     {
      "score": 4,
      "response": "AC offered 'pay now, start later' — complete enrollment now and choose a tentative start date later, changeable per preference."
     }
    ],
    "avoid": [
     {
      "response": "Proposed starting with one class/week during the remaining two weeks of tournament season, then ramping to two sessions/week once free, to avoid falling behind with new school year."
     },
     {
      "response": "Pushed back gently, argued starting before school begins (next month) is better than starting after and falling behind on fractions."
     }
    ]
   },
   "travel": {
    "label": "Travel / vacation / summer in India",
    "n": 8,
    "verbatims": [
     "We may be away for the long weekend here. So how do we reschedule or can we start it a week later?",
     "she might have, let's say next summer break...If you are travelling to India, for those weeks we can cancel it or how does that work?",
     "I'm moving back to India next year. So following that pattern for the US board for this one year doesn't make sense",
     "we decided to wait actually for a couple of months because we will be going to India for one and a half months"
    ],
    "draft": "Travel is fine. You can pause classes while you are away and the tenure is adjusted, so nothing is lost. If you are going to India, classes can continue in Indian time with the same coach if you want. Shall we enrol now and set the start date for [start_date]?",
    "dont": "Do not let travel become an open-ended deferral. Enrol now with a later start, or fix the return-date call.",
    "best": [
     {
      "score": 5,
      "response": "Proposed a customized 2-month, 3x/week plan (26 classes in 2 months instead of the usual 3 months) with continuity into India-curriculum classes after the move, priced at a discounted $489."
     },
     {
      "score": 4,
      "response": "Confirmed both rescheduling and delaying the start date were possible; helped move the start date to September 9th."
     },
     {
      "score": 4,
      "response": "For those weeks you can pause it, pause the classes, we have an option to pause the session. Once you come back we will just resume it again."
     }
    ],
    "avoid": [
     {
      "response": "Wished the parent well and said to reach back out whenever the timing is right"
     },
     {
      "response": "Offered to continue classes during the India travel on India-friendly hours"
     }
    ]
   }
  }
 },
 "trust_or_indian_company": {
  "label": "Trust",
  "subs": {
   "india": {
    "label": "Teachers from India / not US",
    "n": 10,
    "verbatims": [
     "your teachers are from... is it just like a contractor's... my husband kind of doubts like our teachers all in different countries, not in US... we don't know their background at all",
     "I don't know why this, why it is the platforms that we are working with from India or whatnot are often such large commitments.",
     "she has been [burned] twice like this with other coaching classes from India... the assessor will be great... but then the coaching will be non up to par",
     "Are you guys an Indian company?"
    ],
    "draft": "Our coaches are full-time Cuemath coaches, trained for eight weeks on the US curriculum and state standards, with at least five years' experience, and you see the coach's profile before the first class. We have taught US families for fifteen years. And the two-class switch and refund guarantee are there precisely so you are not taking this on trust.",
    "dont": "Do not become defensive. Do not over-quote ratings; one proof point is enough.",
    "best": [
     {
      "score": 5,
      "response": "Explained rigorous vetting, 8-week US-curriculum training, minimum 5 years' experience, coach background viewable in portal, 4.9/5 Trustpilot rating"
     },
     {
      "score": 5,
      "response": "Explained Cuemath has adapted curriculum/methodology to US/Canada standards for 15 years and offered the two free trial classes to test coach fit."
     },
     {
      "score": 4,
      "response": "Explained teachers are full-time, dedicated to Cuemath only, trained 8 weeks on US curriculum/state standards, minimum 5 years experience, background viewable via the coach profile email"
     }
    ],
    "avoid": [
     {
      "response": "Emphasized the assigned coach's 13 years of teaching experience (7 years with US students) and full training on the US curriculum"
     }
    ]
   },
   "refund": {
    "label": "Doubts refund / lock-in / past burn",
    "n": 7,
    "verbatims": [
     "she doesn't give any back educational qualification background on that",
     "there are many such whatever programs that they say they'll refund or we can cancel, but we should always be behind the people to get our money back",
     "They do not believe in a refund, right? Like suppose that we don't get money back and it's not like few dollars.",
     "one of the other parents who did QMAT, their feedback was they didn't like the coach so their kid wasn't progressing for three months then they had to ask for a coach replacement and it took you guys little time"
    ],
    "draft": "The refund is pro-rated for unused classes, no questions asked, and it is written into the plan you receive. You also get a coach switch within the first two classes at no cost. I will send you the terms in writing today.",
    "dont": "Do not say 'trust me'. Send the written terms.",
    "best": [
     {
      "score": 4,
      "response": "Manager detailed the no-questions refund process and pointed to Trustpilot reviews and 15 years of operating history."
     },
     {
      "score": 4,
      "response": "Reassured that Cuemath's methodology builds reasoning/logic rather than imposing rigid rules, and coaches are trained not to force a single approach."
     },
     {
      "score": 4,
      "response": "Explained coach-switch policy, refund guarantee within first 4 sessions, cited Trustpilot ratings and referral base as trust signals."
     }
    ],
    "avoid": [
     {
      "response": "Said qualifications are internal to the portal, but parent can connect with the teacher directly after regular classes start via PTMs."
     },
     {
      "response": "Explained the system health/audio check built into the LEAP portal before any class starts."
     }
    ]
   },
   "links": {
    "label": "Won't click links / IVR call distrust",
    "n": 5,
    "verbatims": [
     "Come on everyone tastes like this all sales people I know they have all the control sales offer.",
     "So I am not in the false hand, correct? Because I don't want to pay... I know because we have too many cases that [are scams].",
     "I don't trust the random... why this number is a registered US number? I don't understand... I would rather... trust the website.",
     "I just wanna make sure that I'm not getting stale... if you guys are not scammers, then I can go ahead and make the full payment."
    ],
    "draft": "Completely fair. You do not need to click anything I send. Go to cuemath.com yourself, sign in with the email you used for the evaluation, and the plan is there under [child]'s profile. I can stay on the line while you do it.",
    "dont": "Do not insist on the link. Do not argue about the caller ID.",
    "best": [
     {
      "score": 3,
      "response": "Reassured the parent the portal link and credentials were official and also sent from the AC's official email for verification."
     }
    ],
    "avoid": [
     {
      "response": "AC explained it's an IVR/system-generated call and reassured her she can register directly on the website."
     }
    ]
   }
  }
 },
 "already_enrolled_elsewhere": {
  "label": "Already enrolled elsewhere",
  "subs": {
   "enrolled": {
    "label": "Already with another provider",
    "n": 19,
    "verbatims": [
     "No, it was good. It was good. She's taking a class already. ... She's taking classes from India. ... It's over the Zoom class, one over class every day.",
     "Already we took some other class and we have some reservations over there.",
     "We spoke with a local teacher who is also teaching math tutoring in person; we would like to send her to their home.",
     "actually I have taken from coding that 6 months subscription I have taken from them...I have paid that six months."
    ],
    "draft": "That is good, [child] is getting help. May I ask what you are hoping to add? [Listen.] Most families who come to us from a centre are looking for one-on-one attention on specific gaps, which is what the report showed for [child]. If it is worth testing, the 3-month plan runs alongside without a long commitment.",
    "dont": "Do not ask them to drop the other provider. Do not close the profile without asking what they are missing.",
    "best": [
     {
      "score": 4,
      "response": "Reframed Cuemath as complementary conceptual/foundational support (not a replacement) and proposed a 3-month trial to test fit without committing long-term."
     }
    ],
    "avoid": [
     {
      "response": "No direct response — AC did not probe into the other class or its issues."
     },
     {
      "response": "Acknowledged and offered to close the profile."
     }
    ]
   }
  }
 },
 "kid_not_interested": {
  "label": "Child not interested",
  "subs": {
   "kid": {
    "label": "Child not interested / felt pressure",
    "n": 13,
    "verbatims": [
     "my kid don't want to continue... he says maybe this is not for me... he wants to learn first the basic things",
     "We just want to do offline, that's what my daughter wants actually... she said it's a little hard to concentrate [online]... I think she's not ready for online yet",
     "he is not ready for that yet... he felt the pressure... he was saying that I'm not interested in this type of thing. But I am interested in that.",
     "My son was not interested in that. He was looking for something else. So he said no. Even though I was interested because I liked the pattern... since I cannot force him to do that so as of now I am saying no."
    ],
    "draft": "That is worth taking seriously. The evaluation can feel like a test, and it is not how classes feel. Can I ask what [child] said about it? [Listen.] The first month with the coach is deliberately about getting comfortable. If you would like, we can start with the 1-month or 3-month plan and let [child] decide with you after that.",
    "dont": "Do not accept the child's no without asking why. Do not push a 12-month plan here.",
    "best": [
     {
      "score": 5,
      "response": "Reframed the eval as a diagnostic, not a test/pressure situation, and offered a low-commitment 1-month plan to try it out."
     },
     {
      "score": 4,
      "response": "We have got the report, we have seen that fluency is the best area... but understanding is not very consistent in depth, so that is something we work upon... if he doesn't answer, they switch to the basics of that topic, and once basics are clear, then they go to advance."
     }
    ],
    "avoid": [
     {
      "response": "Acknowledged, explained kids often need a few sessions to settle into interactive online format, invited her to try again next year"
     },
     {
      "response": "Offered to speak with [child] directly to understand and bridge the gaps from the evaluation."
     }
    ]
   }
  }
 },
 "other": {
  "label": "Other concerns",
  "subs": {
   "misc": {
    "label": "Other",
    "n": 44,
    "verbatims": [
     "I want her to only focus on AMC-8. I don't want her to do anything else... I don't want her to get loose focus, get distracted with doing many other things.",
     "We haven't decided yet because you know yesterday, [child] was not well and she was not feeling well. So we couldn't get chance to talk about this thing yesterday.",
     "I particularly wanted to do tomorrow only on Tuesday... which brings good luck to me because he never never gone for any classes so I always start things on Tuesday",
     "I'm in office right now. Can you give me time... once I go home, I'll register him."
    ],
    "draft": "Listen fully, restate the concern in one sentence, answer it directly, then ask: 'Does that settle it?' If you do not know, say you will confirm in writing by [time] today.",
    "dont": "Do not guess. Do not talk past the concern.",
    "best": [
     {
      "score": 4,
      "response": "Understood, okay, if it's related to that, I will not pressurize you, definitely just go ahead tomorrow, no problem"
     },
     {
      "score": 4,
      "response": "No, only 6-month and 12-month plans available; per-session cost is worse on shorter tenure so 12-month is best value given she's confident in the tutor."
     },
     {
      "score": 4,
      "response": "AC confirmed it's fine to start classes in either September or October based on the parent's logistics."
     }
    ],
    "avoid": [
     {
      "response": "No worries, is it possible if we can connect before the end of the day? Meanwhile you can discuss with your family."
     },
     {
      "response": "Clarified the pause mechanic but did not have another alternative once parent rejected it."
     }
    ]
   },
   "eval_dispute": {
    "label": "Disputes the eval score / level",
    "n": 23,
    "verbatims": [
     "Let me spend some time on that one. Weekend is busy, that's why I didn't get enough time. So give me some time, maybe a few days.",
     "I don't know who [child] is. I have received the below email in error and I still have not heard back from them.",
     "I didn't get any email of his evaluation report. We said you are going to send email. I didn't get any.",
     "the reports what QMath gave me was a little bit lower than what he used to score... which I was not okay"
    ],
    "draft": "The score is a snapshot of how [child] worked through those specific questions on that day, not a judgement of ability. What the specialist used it for is to find where to start. If you feel it placed [child] too low, the coach calibrates in the first class and adjusts the level. We can also run a short re-check if you prefer.",
    "dont": "Do not defend the number. Do not say the child is 'behind'.",
    "best": [
     {
      "score": 5,
      "response": "Reassured the plan starts at grade-6 level and only revisits earlier-grade concepts when a specific gap blocks progress (e.g., using a geometry example), not a full grade rollback; emphasized building confidence, not re-teaching from scratch."
     },
     {
      "score": 5,
      "response": "I can go ahead and schedule another session for [child] as per grade third level... or the coach, in the first live session, can solve some questions together according to grade third and grade four and create a learning plan from there"
     },
     {
      "score": 4,
      "response": "Apologized, found and corrected the data mix-up (child record mislabeled '[child]' under this parent's phone number), and confirmed the correction was made in-call."
     }
    ],
    "avoid": [
     {
      "response": "Agreed to follow up later in the week rather than push for an immediate walkthrough."
     },
     {
      "response": "It was shared on the registered email ID... I'm extremely sorry for the issue here. I'll rectify this in the system."
     }
    ]
   },
   "tech": {
    "label": "Device / tech / platform issues",
    "n": 8,
    "verbatims": [
     "he has already gone through all of what you have said just now. And we have mentioned to him that we need some time to discuss on this and we will be getting back to you.",
     "the screen time is the major problem, that I can understand.",
     "What are the cancellations? ...how do I cancel the class without getting charged for it?",
     "So every six months it will automatically did it?"
    ],
    "draft": "Let us test it now. Open the app on the device [child] will use and try screen sharing. On iPad, screen recording must be allowed for the app in Settings. If it does not work I will set up a five-minute test call before the first class.",
    "dont": "Do not leave tech setup to the first class.",
    "best": [
     {
      "score": 4,
      "response": "No — you will receive a call and money is only charged after your consent; can cancel at any point in the app."
     },
     {
      "score": 4,
      "response": "AC agreed, sent the portal link over WhatsApp for the parent to complete whenever convenient (today or tomorrow morning)."
     },
     {
      "score": 3,
      "response": "Explained the parent app lets you pause a class up to 15 min before start and it gets rescheduled with the coach, so no session is lost."
     }
    ],
    "avoid": [
     {
      "response": "we have other platforms where IESL or other things are there. The only thing we are avoiding that is to make them offline. They are trying to reduce the screen time."
     },
     {
      "response": "Explained the mapped tutor's hold would be released today and the profile would be closed for now; invited a fresh trial after a month."
     }
    ]
   },
   "group_vs_1on1": {
    "label": "Group vs 1:1 / class format",
    "n": 7,
    "verbatims": [
     "She's the first time doing on the online class... I don't have any experience with her for the online class.",
     "I asked any group classes or any other options... something in the middle... three in a group.",
     "My son won't be like that much compatible at this moment for a one on one or like a video kind of thing. He need a in person attention.",
     "No, we already had a discussion. It's like how many times we'll have a discussion about the same topic... if it is some spam calls we will not receive."
    ],
    "draft": "Every class is one coach with [child] only. There is no group, so the pace and the content follow [child], not the room.",
    "dont": "Do not compare group sizes you cannot verify.",
    "best": [
     {
      "score": 4,
      "response": "AC explained the interactive 1:1 format, daily/weekly progress tracking, and the added MathGym advanced-practice feature."
     },
     {
      "score": 4,
      "response": "Explained the value of personalized one-on-one attention over group classes and suggested the parent try it with the child, noting most parents prefer one-on-one."
     },
     {
      "score": 3,
      "response": "Agreed to switch future communication to email/WhatsApp group instead of repeated phone calls."
     }
    ],
    "avoid": [
     {
      "response": "AC explained why Cuemath only offers 1:1 sessions and argued this gives better individualized attention than group formats."
     },
     {
      "response": "Explained Cuemath teachers are qualified and based mostly in India, cater to K-5 age group, and asked whether the resistance was based on prior experience or assumption."
     }
    ]
   },
   "curriculum": {
    "label": "Curriculum / school alignment / homework",
    "n": 4,
    "verbatims": [
     "our initial thought was not right now because I wanted to see how this school offers for the first half a year... probably during winters... I can think of starting some extra classes, but not right now",
     "we are moving towards the Pacific side... it's not that he doesn't need it, but we are more focused on the MPA and other stuff... he does a lot of sports, so timing becomes a challenge",
     "we weren't like planning yet to join for the Q-Mod but maybe after a few months... I thought like maybe I can wait for a few months and see once the actual syllabus starts right for her in the classroom.",
     "we decided to not to go forward as like we have changed our kids school... to a charter school... I would like him to get adjusted first"
    ],
    "draft": "The plan follows the US curriculum for [child]'s grade and state standards, and the coach aligns homework and school topics as they come up. Where the report shows a gap from an earlier grade, the coach fills it inside the current grade's work, not by going back a year.",
    "dont": "Do not say 'we teach Indian methods'.",
    "best": [],
    "avoid": [
     {
      "response": "Argued that starting now would build foundational strength ahead of the school curriculum and offered flexible scheduling (10am-8pm, any day)."
     },
     {
      "response": "Accepted the deferral, said he'd note it with the team, and shared his contact for whenever the parent is ready."
     }
    ]
   },
   "progress": {
    "label": "How progress is tracked / PTM",
    "n": 2,
    "verbatims": [
     "I want to make sure that she enjoys it... I'm not looking for any magic that can happen in a very short period.",
     "[child] [[child]] said he'd add 8 referral classes for my son months ago and it's been 3-4 months and it's not updated... I don't want them to come back saying this has to be done first."
    ],
    "draft": "You get a note after each class in the parent app, a parent-teacher conference at 30 days, and a quarterly review against the milestones. You can message the coach directly between classes.",
    "dont": "Do not promise weekly calls from the coach.",
    "best": [
     {
      "score": 5,
      "response": "Apologized for the prior AC's ([child], on medical leave) non-fulfillment, personally took ownership, and offered to email management to add both the 16 sibling + 8 pending referral classes together (24 total) to avoid parent waiting twice."
     }
    ],
    "avoid": [
     {
      "response": "AC redirected to progress/outcome metrics rather than addressing the enjoyment/schedule-fit concern directly."
     }
    ]
   }
  }
 }
};
