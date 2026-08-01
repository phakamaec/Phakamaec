const pages = {
  "about-phakama": {k:"About Us",t:"About Phakama.",i:"A people-powered civic movement working with communities across the Eastern Cape.",d:"Phakama brings citizens, partners and institutions together to strengthen accountability, promote local development and create sustainable opportunities.",cards:[["Civic Identity","We serve communities beyond election cycles and place public interest first."],["Community Rooted","Our work begins with local voices, priorities and lived experience."],["Province Wide","We build relationships and practical programmes across the Eastern Cape."]]},
  "mission-vision": {k:"About Us",t:"Mission & Vision.",i:"Building an Eastern Cape where communities help lead their own development.",d:"Our mission is to mobilise communities, grow accountable leadership and turn shared priorities into practical action.",cards:[["Our Mission","To strengthen civic participation, accountable leadership and sustainable local development."],["Our Vision","A capable, inclusive and thriving Eastern Cape shaped by active citizens."],["Our Values","Integrity, service, courage, community ownership and constructive partnership."]]},
  "our-journey": {k:"About Us",t:"Our Journey.",i:"From vision to institution: the story of building Phakama.",d:"Established in September 2025, Phakama has grown through civic action, strategic partnerships and an unwavering commitment to the province.",cards:[["2025","Phakama Eastern Cape is established as a civic movement."],["13 Case Studies","Documented civic interventions capture learning and measurable progress."],["Growing Footprint","Partnerships and programmes extend into more Eastern Cape communities."]]},
  "focus-areas": {k:"Programmes",t:"Focus Areas.",i:"Programme information will be placed here soon.",d:"This section is currently empty. Focus areas will be published as soon as they are ready.",cards:[]},
  "action-plan": {k:"Programmes",t:"Action Plan.",i:"Programme information will be placed here soon.",d:"This section is currently empty. The action plan will be published here soon.",cards:[]},
  "campaigns": {k:"Programmes",t:"Campaigns.",i:"Programme information will be placed here soon.",d:"This section is currently empty. Campaign information will be published here soon.",cards:[]},
  "news": {k:"News & Media",t:"Latest News.",i:"News will be placed here soon.",d:"This section is currently empty. Please check back soon for Phakama Eastern Cape news and updates.",cards:[]},
  "events": {k:"News & Media",t:"Upcoming Events.",i:"Events will be placed here soon.",d:"This section is currently empty. Upcoming events and community engagements will be published here soon.",cards:[]},
  "media": {k:"News & Media",t:"Media Centre.",i:"Media will be placed here soon.",d:"This section is currently empty. Media statements, photographs and related materials will be added soon.",cards:[]},
  "constitution": {k:"Resources",t:"Constitution.",i:"Resources will be placed here soon.",d:"This section is currently empty. Please check back soon for the Phakama Eastern Cape constitution and related documents.",cards:[]},
  "reports-policies": {k:"Resources",t:"Reports & Policies.",i:"Resources will be placed here soon.",d:"This section is currently empty. Reports, policies and public documents will be added as soon as they are ready.",cards:[]},
  "transparency": {k:"Resources",t:"Transparency.",i:"Resources will be placed here soon.",d:"This section is currently empty. Transparency and accountability documents will be published here soon.",cards:[]},
  "become-a-member": {k:"Get Involved",t:"Become a Member.",i:"Take your place in a people-powered movement for the Eastern Cape.",d:"Members contribute their voice, experience and energy to community action and the long-term renewal of the province.",cards:[["Why Join","Connect with citizens committed to capable communities and accountable leadership."],["Your Role","Participate in dialogues, programmes, campaigns and local organising."],["Next Step","Contact our membership team to receive the application form."]]},
  "volunteer": {k:"Get Involved",t:"Volunteer.",i:"Put your skills and time to work for stronger communities.",d:"From event support and research to communications and professional expertise, every contribution matters.",cards:[["Community Action","Support local dialogues, events and campaigns."],["Professional Skills","Contribute expertise in law, finance, education, media or development."],["Flexible Roles","Choose opportunities that match your availability and location."]]},
  "partner-with-us": {k:"Get Involved",t:"Partner With Us.",i:"Sustainable change takes strong, trusted partnerships.",d:"We collaborate with government, traditional leaders, universities, business, faith communities and civil society.",cards:[["Programme Partners","Co-design and deliver practical community programmes."],["Knowledge Partners","Contribute research, evidence, learning and specialist expertise."],["Funding Partners","Invest in scalable initiatives with measurable public value."]]},
  "donate": {k:"Get Involved",t:"Support the Work.",i:"Your contribution helps communities organise, participate and rise.",d:"Donations strengthen local programmes, civic education, community dialogues and organisational capacity.",cards:[["Community Programmes","Support direct engagement and practical local action."],["Youth Opportunity","Help connect young people to education, guidance and skills."],["Institution Building","Grow a capable, accountable civic movement for the long term."]]},
  "contact": {k:"Contact Us",t:"Let’s Connect.",i:"Talk to the Phakama Eastern Cape team.",d:"Contact us about membership, partnerships, media enquiries, programmes or community priorities.",cards:[["Email","info@phakamaec.org.za"],["Telephone","+27 (0)79 920 0361"],["Location","Eastern Cape, South Africa."]]}
};
const key=document.body.dataset.page, p=pages[key]||pages["about-phakama"];
document.title=`${p.t.replace(".","")} | Phakama Eastern Cape`;
document.querySelectorAll(".side-nav a").forEach(link=>link.classList.toggle("active",link.getAttribute("href")===`${key}.html`));
document.querySelector("#pageHero").innerHTML=`<div><div class="crumb"><a href="index.html">Home</a> &nbsp; / &nbsp; ${p.k}</div><span class="tag orange-tag">${p.k}</span><h1>${p.t.replace(" "," <em>")}</em></h1></div>`;
const isResourcePage=p.k==="Resources";
const isNewsMediaPage=p.k==="News & Media";
const isProgrammePage=p.k==="Programmes";
document.querySelector("#pageContent").innerHTML=`<div class="inner-intro"><h2>${p.i}</h2><p>${p.d}</p></div>${isResourcePage||isNewsMediaPage||isProgrammePage?`<div class="resources-empty" role="status"><span class="tag orange-tag">Coming Soon</span><h2>No ${isResourcePage?"resources":isProgrammePage?"programme information":"content"} have been published yet.</h2><p>${isResourcePage?"Documents and downloads":isProgrammePage?"Programme details":"News, events and media"} will be placed here soon.</p></div>`:`<div class="content-grid">${p.cards.map((c,i)=>`<article class="content-card ${i===1?"accent":i===2?"green":""}"><span>0${i+1}</span><h3>${c[0]}</h3><p>${c[1]}</p></article>`).join("")}</div><div class="inner-cta"><h2>Ready to take the next step?</h2><a class="button" href="contact.html">Contact Us</a></div>`}`;
if(key==="about-phakama"){
  document.body.classList.add("about-page");
  document.querySelector("#pageContent").innerHTML=`
    <section class="about-feature">
      <div class="about-statement">
        <span class="tag orange-tag">About Us</span>
        <h1>A<br>People<br>Powered<br>Movement.</h1>
        <p>Working to build a self-sufficient, secure, and prosperous Eastern Cape.</p>
      </div>
      <div class="about-purpose">
        <h2>Phakama Eastern Cape was born out of a profound realization: the people of this province can no longer wait for top-down political salvation.</h2>
        <p>Despite its rich history and immense potential, the Eastern Cape has been held back by systemic failures, lack of accountability, and a disconnect between governance and community needs.</p>
        <p>We are a developmental movement focused on immediate, pragmatic solutions and rigorous accountability.</p>
      </div>
    </section>
    <section class="about-principles">
      <article><b>01</b><h3>Pan-Provincial</h3><p>Not limited to one district. Our vision encompasses the entirety of the Eastern Cape.</p></article>
      <article><b>02</b><h3>Community-Driven</h3><p>Mandates from the ground up via Imbizos. Policies shaped by lived realities.</p></article>
      <article><b>03</b><h3>No Patronage</h3><p>Advancement is based strictly on competence, integrity, and service track records.</p></article>
      <article><b>04</b><h3>Service Over Status</h3><p>Leadership is a responsibility. Leaders are evaluated on tangible community impact.</p></article>
      <article><b>05</b><h3>Results Over Rhetoric</h3><p>Success is jobs created, infrastructure built, and services delivered.</p></article>
      <article><b>06</b><h3>Indigenous</h3><p>Built by Eastern Cape people who understand the unique cultural and historical context.</p></article>
    </section>
    <section class="about-join"><h2>The time for waiting is over. The time for action is now.</h2><a href="become-a-member.html">Join the Movement <span>↗</span></a></section>
    <section class="about-footer">
      <div><h2>Phakama.</h2><p>A civic movement dedicated to the resurgence of the Eastern Cape - registered NPC &amp; DSD-registered NPO.</p><small>Contact Details</small><a href="mailto:info@phakamaec.org.za">info@phakamaec.org.za</a><a href="tel:+27799200361">+27 (0)79 920 0361</a><small>Follow Us</small><div class="social-icons"><a href="https://www.tiktok.com/@phakama.ec?_r=1&amp;_t=ZS-98NveYnJPaj" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><img class="social-icon tiktok" src="https://cdn.simpleicons.org/tiktok/FFFFFF" alt="" loading="lazy"><span>TikTok</span></a><a href="https://www.facebook.com/profile.php?id=61591961061514" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img class="social-icon facebook" src="https://cdn.simpleicons.org/facebook/FFFFFF" alt="" loading="lazy"><span>Facebook</span></a><a href="https://www.instagram.com/phakama_easterncape/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img class="social-icon instagram" src="https://cdn.simpleicons.org/instagram/FFFFFF" alt="" loading="lazy"><span>Instagram</span></a></div></div>
      <div><span class="tag soft-resource">Quick Links</span><a href="index.html">Home</a><a href="about-phakama.html">About Us</a><a href="index.html#impact">Our Impact</a><a href="focus-areas.html">Programmes</a><a href="news.html">News &amp; Media</a><a href="events.html">Events</a><a href="become-a-member.html">Get Involved</a><a href="contact.html">Contact Us</a></div>
      <div><span class="tag soft-resource">Resources</span><p>No resources are available yet.<br>Documents will be placed here soon.</p></div>
      <div class="about-footer-action"><span class="tag orange-tag">Action</span><h3>Step Off<br>the<br>Sidelines.</h3><a href="become-a-member.html">Become a Member</a><a href="donate.html">Donate</a><a href="partner-with-us.html">Partner With Us</a></div>
    </section>`;
}
if(key==="donate"){
  document.body.classList.add("donate-page");
  document.querySelector("#pageContent").innerHTML=`
    <div class="donate-layout">
      <section class="donate-pitch">
        <span class="tag donate-tag">Support</span>
        <h1>Fuel<br>the<br>Movement.</h1>
        <p>We rely entirely on citizens who believe the Eastern Cape deserves better. We take no corporate dark money. Your support keeps us independent and accountable only to the people.</p>
        <div class="transparency">
          <small>Transparency Guarantee</small>
          <ul><li><span>✓</span>Full quarterly financial disclosures</li><li><span>✓</span>Independent and people-powered</li><li><span>✓</span>Funds used for movement operations</li></ul>
        </div>
      </section>
      <section class="contribution">
        <h2>Make a<br>Contribution.</h2>
        <p>Transfer directly to our bank account. Please use your name as the payment reference.</p>
        <div class="bank-card">
          <div class="bank-heading">Phakama Eastern Cape Banking Details</div>
          <dl>
            <div><dt>Bank</dt><dd>First National Bank</dd></div>
            <div><dt>Account Number</dt><dd>63173676546</dd></div>
            <div><dt>Branch Code</dt><dd>255355</dd></div>
            <div><dt>Swift Code</dt><dd>FIRNZAJJ</dd></div>
            <div><dt>Account Type</dt><dd>Gold Business Account</dd></div>
          </dl>
        </div>
        <p class="donation-note">All donations are used solely for movement operations and community programmes. Please retain your payment confirmation for your records.</p>
        <a class="donation-contact" href="contact.html">Contact Us About Your Contribution <span>→</span></a>
      </section>
    </div>`;
}
if(key==="events"){
  const datedCards=document.querySelectorAll(".content-grid .content-card");
  if(datedCards.length>1){
    datedCards[0].dataset.eventEnd="2026-07-17T14:00:00+02:00";
    datedCards[1].dataset.eventEnd="2026-07-31T14:00:00+02:00";
  }
  const now=Date.now();
  document.querySelectorAll("[data-event-end]").forEach(card=>{
    const end=Date.parse(card.dataset.eventEnd);
    if(Number.isFinite(end)&&end<=now) card.remove();
  });
}
if(key==="become-a-member"){
  document.body.classList.add("member-page");
  document.querySelector("#pageContent").innerHTML=`
    <div class="membership-layout">
      <section class="member-pitch">
        <span class="tag pale-tag">Membership</span>
        <h1>Step<br>Off the<br>Sidelines.</h1>
        <p>Join thousands of Eastern Cape citizens taking responsibility for our province's future. Become a registered member today.</p>
        <div class="member-rights"><small>Member Rights</small><div>
          <article><h3>Voting Rights</h3><p>Vote on policies and elected leadership at our People's Imbizos.</p></article>
          <article><h3>Community Impact</h3><p>Direct involvement in civic campaigns in your immediate ward.</p></article>
        </div></div>
      </section>
      <section class="member-form-wrap">
        <span class="tag green-tag">Membership Application</span>
        <h2>Become a<br>Member.</h2>
        <p>Takes less than 3 minutes to complete.</p>
        <form class="member-form" id="memberForm" action="https://formsubmit.co/aphiko2@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="New Phakama Eastern Cape Membership Application">
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="_captcha" value="true">
          <input type="hidden" name="_next" value="https://phakamaec.org.za/become-a-member.html?submitted=1">
          <input class="form-honeypot" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">
          <fieldset class="form-group wide"><legend>1. Personal Details</legend>
            <div class="form-fields">
              <label>First Name<input name="firstName" autocomplete="given-name" required></label>
              <label>Last Name<input name="lastName" autocomplete="family-name" required></label>
              <label>SA ID Number<input name="idNumber" inputmode="numeric" minlength="13" maxlength="13" pattern="[0-9]{13}" required></label>
              <label>Date of Birth<input name="dateOfBirth" type="date" autocomplete="bday" required></label>
              <fieldset class="choice-field"><legend>Gender</legend><div class="choice-row"><label><input type="radio" name="gender" value="Female" required> Female</label><label><input type="radio" name="gender" value="Male"> Male</label><label><input type="radio" name="gender" value="Other"> Other</label><label><input type="radio" name="gender" value="Prefer not to say"> Prefer not to say</label></div></fieldset>
              <label>Phone Number<input name="phone" type="tel" autocomplete="tel" required></label>
              <label class="wide">Email Address<input name="email" type="email" autocomplete="email" required></label>
              <label class="wide">Physical Address<textarea name="physicalAddress" rows="3" autocomplete="street-address" required></textarea></label>
            </div>
          </fieldset>

          <fieldset class="form-group wide"><legend>2. Region / District</legend>
            <div class="form-fields">
              <label class="district-field">District Municipality<span class="rounded-select"><select name="district" required><option value="">Select district</option><option>Buffalo City Metro</option><option>Nelson Mandela Bay Metro</option><option>Alfred Nzo District</option><option>Amathole District</option><option>Chris Hani District</option><option>Joe Gqabi District</option><option>OR Tambo District</option><option>Sarah Baartman District</option></select></span></label>
              <label>Ward Number (if known)<input name="ward" inputmode="numeric"></label>
              <fieldset class="choice-field wide"><legend>Age Group</legend><div class="choice-row"><label><input type="radio" name="ageGroup" value="18-35" required> 18-35</label><label><input type="radio" name="ageGroup" value="36-50"> 36-50</label><label><input type="radio" name="ageGroup" value="51+"> 51+</label></div></fieldset>
            </div>
          </fieldset>

          <fieldset class="form-group wide"><legend>3. Skills / Expertise <small>(Optional - select every area where you can assist)</small></legend>
            <div class="skills-grid">
              <label><input type="checkbox" name="skills" value="Agriculture / Food Security"> Agriculture / Food Security</label>
              <label><input type="checkbox" name="skills" value="Finance / Administration"> Finance / Administration</label>
              <label><input type="checkbox" name="skills" value="Social Development"> Social Development</label>
              <label><input type="checkbox" name="skills" value="Governance / Leadership"> Governance / Leadership</label>
              <label><input type="checkbox" name="skills" value="Community Mobilisation"> Community Mobilisation</label>
              <label><input type="checkbox" name="skills" value="Legal / Compliance"> Legal / Compliance</label>
              <label><input type="checkbox" name="skills" value="Youth Development"> Youth Development</label>
              <label class="other-skill">Other<input name="otherSkill" placeholder="Please specify"></label>
            </div>
          </fieldset>

          <fieldset class="form-group declaration wide"><legend>4. Declaration &amp; Commitment</legend>
            <p>I confirm that I:</p>
            <ul>
              <li>Support the mission and values of Phakama Eastern Cape.</li>
              <li>Will uphold its Constitution, Code of Conduct, and organisational rules.</li>
              <li>Will act with integrity and accountability in all organisational matters.</li>
              <li>Acknowledge Phakama's non-partisan status and will not use it for party-political purposes.</li>
              <li>Consent to the processing of my personal information in line with POPIA for membership administration.</li>
            </ul>
            <label class="consent"><input type="checkbox" name="declarationAgreement" value="Agreed" required><span>I agree to the above declaration and confirm that the supplied information is correct.</span></label>
            <label class="consent"><input type="checkbox" name="emailTransmissionConsent" value="Consent given" required><span>I consent to my personal information, including my ID number, being transmitted to the membership team by email to process this application.</span></label>
            <div class="form-fields signature-fields"><label>Signature (type your full name)<input name="signature" required></label><label>Date<input name="applicationDate" type="date" required></label></div>
          </fieldset>

          <aside class="membership-fee wide"><strong>Membership Contribution</strong><span>Phakama Eastern Cape membership contribution is R50 per annum.</span></aside>

          <fieldset class="form-group office-only wide" disabled><legend>Office Use Only</legend><p>Completed internally after the application is received.</p><div class="form-fields"><label>Region Name<input name="officeRegion"></label><label>Ward<input name="officeWard"></label><label>Office Signature<input name="officeSignature"></label><label>Date<input name="officeDate" type="date"></label></div></fieldset>
          <button class="submit-member wide" type="submit">Submit Application <b>→</b></button>
          <output class="wide" aria-live="polite"></output>
        </form>
      </section>
    </div>`;
  const memberForm=document.querySelector("#memberForm");
  if(new URLSearchParams(location.search).get("submitted")==="1") memberForm.querySelector("output").textContent="Thank you. Your membership application has been sent to the Phakama Eastern Cape membership team.";
  memberForm.addEventListener("submit",()=>{
    const submitButton=memberForm.querySelector("button[type=submit]");
    submitButton.disabled=true;
    submitButton.textContent="Sending Application...";
  });
}
if(key==="volunteer"){
  document.body.classList.add("member-page","volunteer-page");
  document.querySelector("#pageContent").innerHTML=`
    <div class="membership-layout">
      <section class="member-pitch">
        <span class="tag pale-tag">Volunteer With Us</span>
        <h1>Give<br>Your Time.<br>Create<br>Impact.</h1>
        <p>Use your time, experience and skills to help Eastern Cape communities organise, participate and rise.</p>
        <div class="member-rights"><small>Ways to contribute</small><div>
          <article><h3>Community Action</h3><p>Support local dialogues, events, campaigns and outreach activities.</p></article>
          <article><h3>Professional Skills</h3><p>Contribute specialist knowledge, practical experience or administrative support.</p></article>
        </div></div>
      </section>
      <section class="member-form-wrap">
        <span class="tag green-tag">Volunteer Registration</span>
        <h2>Volunteer<br>With Us.</h2>
        <p>Complete the form and our team will contact you.</p>
        <form class="member-form" id="volunteerForm" action="https://formsubmit.co/aphiko2@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="New Phakama Eastern Cape Volunteer Registration">
          <input type="hidden" name="_template" value="table">
          <input type="hidden" name="_captcha" value="true">
          <input type="hidden" name="_next" value="https://phakamaec.org.za/volunteer.html?submitted=1">
          <input class="form-honeypot" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">

          <fieldset class="form-group wide"><legend>1. Personal Details</legend>
            <div class="form-fields">
              <label>First Name<input name="firstName" autocomplete="given-name" required></label>
              <label>Last Name<input name="lastName" autocomplete="family-name" required></label>
              <label>Phone Number<input name="phone" type="tel" autocomplete="tel" required></label>
              <label>Email Address<input name="email" type="email" autocomplete="email" required></label>
              <label class="wide">Physical Address<textarea name="physicalAddress" rows="3" autocomplete="street-address" required></textarea></label>
            </div>
          </fieldset>

          <fieldset class="form-group wide"><legend>2. Location &amp; Availability</legend>
            <div class="form-fields">
              <label class="district-field">District Municipality<span class="rounded-select"><select name="district" required><option value="">Select district</option><option>Buffalo City Metro</option><option>Nelson Mandela Bay Metro</option><option>Alfred Nzo District</option><option>Amathole District</option><option>Chris Hani District</option><option>Joe Gqabi District</option><option>OR Tambo District</option><option>Sarah Baartman District</option></select></span></label>
              <label>Ward Number (if known)<input name="ward" inputmode="numeric"></label>
              <fieldset class="choice-field wide"><legend>When are you available?</legend><div class="choice-row"><label><input type="checkbox" name="availability" value="Weekdays"> Weekdays</label><label><input type="checkbox" name="availability" value="Evenings"> Evenings</label><label><input type="checkbox" name="availability" value="Weekends"> Weekends</label><label><input type="checkbox" name="availability" value="Flexible"> Flexible</label></div></fieldset>
              <label class="wide">How many hours can you volunteer per month?<input name="hoursPerMonth" type="number" min="1" max="200" required></label>
            </div>
          </fieldset>

          <fieldset class="form-group wide"><legend>3. Skills &amp; Interests <small>(Select every area where you can assist)</small></legend>
            <div class="skills-grid">
              <label><input type="checkbox" name="skills" value="Community Mobilisation"> Community Mobilisation</label>
              <label><input type="checkbox" name="skills" value="Events and Outreach"> Events &amp; Outreach</label>
              <label><input type="checkbox" name="skills" value="Research and Policy"> Research &amp; Policy</label>
              <label><input type="checkbox" name="skills" value="Media and Communications"> Media &amp; Communications</label>
              <label><input type="checkbox" name="skills" value="Finance and Administration"> Finance &amp; Administration</label>
              <label><input type="checkbox" name="skills" value="Legal and Compliance"> Legal &amp; Compliance</label>
              <label><input type="checkbox" name="skills" value="Youth Development"> Youth Development</label>
              <label><input type="checkbox" name="skills" value="Education and Training"> Education &amp; Training</label>
              <label class="other-skill">Other skill or interest<input name="otherSkill" placeholder="Please specify"></label>
            </div>
            <div class="form-fields signature-fields"><label class="wide">Relevant experience or motivation<textarea name="experienceAndMotivation" rows="5" placeholder="Tell us how you would like to help" required></textarea></label></div>
          </fieldset>

          <fieldset class="form-group declaration wide"><legend>4. Declaration &amp; Consent</legend>
            <p>I confirm that I:</p>
            <ul><li>Support the mission and values of Phakama Eastern Cape.</li><li>Will act respectfully, responsibly and with integrity.</li><li>Will follow volunteer guidance and protect confidential information.</li><li>Consent to the processing of my personal information in line with POPIA for volunteer coordination.</li></ul>
            <label class="consent"><input type="checkbox" name="declarationAgreement" value="Agreed" required><span>I agree to the declaration and confirm that the information supplied is correct.</span></label>
            <label class="consent"><input type="checkbox" name="emailTransmissionConsent" value="Consent given" required><span>I consent to my information being emailed to the Phakama Eastern Cape team to process this registration.</span></label>
            <div class="form-fields signature-fields"><label>Signature (type your full name)<input name="signature" required></label><label>Date<input name="applicationDate" type="date" required></label></div>
          </fieldset>

          <button class="submit-member wide" type="submit">Submit Volunteer Registration <b>&rarr;</b></button>
          <output class="wide" aria-live="polite"></output>
        </form>
      </section>
    </div>`;
  const volunteerForm=document.querySelector("#volunteerForm");
  if(new URLSearchParams(location.search).get("submitted")==="1") volunteerForm.querySelector("output").textContent="Thank you. Your volunteer registration has been sent to the Phakama Eastern Cape team.";
  volunteerForm.addEventListener("submit",()=>{
    const submitButton=volunteerForm.querySelector("button[type=submit]");
    submitButton.disabled=true;
    submitButton.textContent="Sending Registration...";
  });
}
const menu=document.querySelector(".menu"), backdrop=document.querySelector(".backdrop");
function closeMenu(){document.body.classList.remove("menu-open");menu.setAttribute("aria-expanded","false")}
menu.addEventListener("click",()=>{const o=document.body.classList.toggle("menu-open");menu.setAttribute("aria-expanded",String(o))});backdrop.addEventListener("click",closeMenu);
document.querySelectorAll("[data-year]").forEach(n=>n.textContent=new Date().getFullYear());
const simpleFooter=document.querySelector(".simple-footer");
if(simpleFooter&&!document.body.classList.contains("about-page")) simpleFooter.insertAdjacentHTML("beforeend",`<span class="simple-social social-icons compact"><a href="https://www.tiktok.com/@phakama.ec?_r=1&amp;_t=ZS-98NveYnJPaj" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><img class="social-icon tiktok" src="https://cdn.simpleicons.org/tiktok/FFFFFF" alt="" loading="lazy"></a><a href="https://www.facebook.com/profile.php?id=61591961061514" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img class="social-icon facebook" src="https://cdn.simpleicons.org/facebook/FFFFFF" alt="" loading="lazy"></a><a href="https://www.instagram.com/phakama_easterncape/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img class="social-icon instagram" src="https://cdn.simpleicons.org/instagram/FFFFFF" alt="" loading="lazy"></a></span>`);
