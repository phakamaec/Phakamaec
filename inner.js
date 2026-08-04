const pages = {
  "about-phakama": {k:"About Us",t:"About Phakama Eastern Cape.",i:"A people-powered civic movement working with communities across the Eastern Cape.",d:"Phakama Eastern Cape brings citizens, partners and institutions together to strengthen accountability, promote local development and create sustainable opportunities.",cards:[["Civic Identity","We serve communities beyond election cycles and place public interest first."],["Community Rooted","Our work begins with local voices, priorities and lived experience."],["Province Wide","We build relationships and practical programmes across the Eastern Cape."]]},
  "mission-vision": {k:"About Us",t:"Mission & Vision.",i:"An empowered Eastern Cape where communities rise together through accountability, participation and shared leadership.",d:"Our mission is to mobilise, educate and connect communities so that together we build a stronger, more prosperous Eastern Cape.",cards:[["Community First","Communities are at the centre of everything we do."],["Accountability","We promote ethical leadership, transparency and responsible governance."],["Collaboration","We believe sustainable development is achieved through partnerships."],["Respect & Inclusion","Every community deserves dignity, participation and equal opportunity."],["Professionalism","We strive for excellence, integrity and responsible stewardship."],["Sustainable Development","We support practical solutions that create lasting social and economic impact."]]},
  "our-journey": {k:"About Us",t:"Our Journey.",i:"From vision to institution: built by volunteers, strengthened through partnerships.",d:"Launched on 20 September 2025, Phakama Eastern Cape has grown without an office, operational funding or paid employees - powered by citizens who contribute their time, expertise and personal resources.",cards:[["The Beginning","A people-powered civic movement launched to help communities shape a better Eastern Cape."],["Building the Foundation","NPC and NPO registration, governance systems, regional structures, policies and a Strategic Plan for 2025-2027."],["Growing Through Partnerships","Relationships across communities, government, education, traditional leadership, business and civil society."],["Looking Ahead","Stronger governance, expanded regional structures, deeper partnerships and the First Elective Provincial Imbizo."]]},
  "focus-areas": {k:"Our Work",t:"Our Work.",i:"Building stronger communities through three Strategic Pillars.",d:"Governance, economic development and social cohesion work together to create community-led development.",cards:[]},
  "action-plan": {k:"Our Impact",t:"Our Impact.",i:"Building a civic movement and strengthening communities.",d:"Our impact grows through volunteer leadership, community participation and trusted partnerships.",cards:[]},
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
        <p>Working alongside communities to build a stronger, more prosperous and more accountable Eastern Cape.</p>
      </div>
      <div class="about-purpose">
        <h2>Lasting and sustainable development is achieved when communities become active partners in shaping their own future.</h2>
        <p>Established in September 2025, Phakama Eastern Cape works with communities - bringing together citizens, traditional leaders, government, educational institutions, business, faith-based organisations and civil society.</p>
        <p>Our growing network extends across all seven regions of the Eastern Cape.</p>
      </div>
    </section>
    <section class="about-principles">
      <article><b>01</b><h3>Community First</h3><p>We listen before we act and respond to real community needs and aspirations.</p></article>
      <article><b>02</b><h3>Partnership over Confrontation</h3><p>Respectful collaboration and evidence-based advocacy create sustainable outcomes.</p></article>
      <article><b>03</b><h3>From Ideas to Action</h3><p>We build partnerships, support implementation and contribute to long-term solutions.</p></article>
      <article><b>04</b><h3>Ethical Leadership</h3><p>Leadership is exercised with integrity, transparency and accountability.</p></article>
      <article><b>05</b><h3>Professional Governance</h3><p>Policies, systems and decisions follow sound governance practices.</p></article>
      <article><b>06</b><h3>Continuous Improvement</h3><p>We continuously strengthen our systems, leadership and organisational capacity.</p></article>
    </section>
    <section class="approved-content">
      <div class="approved-heading"><span class="tag green-tag">What We Do</span><h2>Turning community priorities into practical solutions.</h2></div>
      <div class="approved-list"><article><h3>Governance &amp; Accountability</h3><p>Strengthening ethical leadership, active citizenship and public service delivery.</p></article><article><h3>Economic Opportunity</h3><p>Expanding entrepreneurship, agriculture, financial inclusion and local development.</p></article><article><h3>Stronger Communities</h3><p>Building safe, resilient and inclusive communities that promote dignity and wellbeing.</p></article><article><h3>Education &amp; Youth</h3><p>Supporting education, youth development, leadership and access to opportunity.</p></article><article><h3>Partnerships</h3><p>Connecting communities and institutions around shared, sustainable solutions.</p></article><article><h3>Community Leadership</h3><p>Empowering communities to lead their own development.</p></article></div>
    </section>
    <section class="approved-content pale-section"><div class="approved-heading"><span class="tag orange-tag">Leadership &amp; Governance</span><h2>Leading through service, accountability and community.</h2><p>Phakama Eastern Cape is currently led by an Interim Provincial Executive Committee while preparing for its First Elective Provincial Imbizo and Annual General Meeting.</p></div><div class="approved-list"><article><h3>Provincial Leadership</h3><p>Implements strategy, establishes systems, coordinates programmes and develops partnerships.</p></article><article><h3>Regional Structures</h3><p>Engage communities, identify priorities and strengthen civic participation.</p></article><article><h3>Portfolio Committees</h3><p>Volunteer structures combining leadership, lived experience and professional expertise.</p></article><article><h3>Professional Services Network</h3><p>Specialist advice, mentoring and technical support that strengthens community impact.</p></article></div></section>
    <section class="about-document">
      <article class="about-chapter" id="who-we-are">
        <span class="tag orange-tag">01 - Who We Are</span>
        <h2>A People-Powered Civic Movement</h2>
        <p>Phakama Eastern Cape is a people-powered civic movement working alongside communities to build a stronger, more prosperous and more accountable Eastern Cape.</p>
        <p>Established in September 2025, Phakama Eastern Cape was founded on the belief that lasting and sustainable development is achieved when communities become active partners in shaping their own future. Rather than working for communities, we work with them - bringing together citizens, traditional leaders, government, educational institutions, business, faith-based organisations and civil society to identify challenges, build partnerships and implement practical solutions that improve people's lives.</p>
        <p>Our work extends across the seven regions of the Eastern Cape through a growing network of volunteers, community structures, Portfolio Committees, strategic partnerships and members committed to ethical leadership, active citizenship and sustainable development.</p>
      </article>
      <article class="about-chapter">
        <span class="tag green-tag">What We Do</span><h2>Connecting communities and institutions.</h2>
        <p>Phakama Eastern Cape serves as a bridge between communities and institutions by:</p>
        <ul class="about-bullets"><li>Strengthening governance, accountability and active citizenship.</li><li>Expanding economic opportunities through entrepreneurship, agriculture, financial inclusion and local development.</li><li>Building socially cohesive, safe and resilient communities that promote dignity, inclusion, volunteerism and community wellbeing.</li><li>Supporting education, youth development and leadership development.</li><li>Creating partnerships that turn community priorities into practical, sustainable solutions.</li><li>Empowering communities to lead their own development.</li></ul>
      </article>
      <article class="about-chapter" id="strategic-pillars">
        <span class="tag orange-tag">Strategic Pillars</span><h2>Three interconnected pillars guide everything we do.</h2>
        <div class="about-three"><section><b>01</b><h3>Governance &amp; Accountability</h3><p>Promoting ethical leadership, accountable governance, active citizenship and improved public service delivery.</p></section><section><b>02</b><h3>Economic Development</h3><p>Supporting entrepreneurship, agriculture, financial inclusion, cooperatives and sustainable local economic development.</p></section><section><b>03</b><h3>Social Cohesion &amp; Community Development</h3><p>Building safe, resilient and inclusive communities that promote human dignity, community wellbeing, active citizenship and opportunities for all.</p></section></div>
      </article>
      <article class="about-chapter about-highlight">
        <span class="tag pale-tag">A Civic Movement First</span><h2>Community partnership and public accountability remain at our core.</h2>
        <p>Phakama Eastern Cape's identity is rooted in civic participation, community partnership and public accountability. While communities may, from time to time, mandate Phakama Eastern Cape to participate in democratic processes where this is considered the most effective way of advancing community interests, our purpose remains unchanged. We are first and foremost a civic movement committed to serving communities before, during and beyond election cycles.</p>
        <h3>Our Commitment</h3><p>Everything we do is guided by one shared purpose: <strong>Rescuing and Reviving the Eastern Cape.</strong></p><p>Working together with communities and partners, we are building an Eastern Cape characterised by accountable leadership, sustainable development, inclusive economic opportunities and stronger, more resilient communities.</p>
      </article>
      <article class="about-chapter" id="how-we-work">
        <span class="tag green-tag">02 - How We Work</span><h2>Building Solutions Together</h2>
        <p>At Phakama Eastern Cape, we believe lasting change cannot be achieved by any single organisation acting alone. Sustainable development happens when communities, government, traditional leaders, educational institutions, business, faith-based organisations and civil society work together around a shared vision for the future.</p>
        <p>Our role is to bring people together, facilitate constructive dialogue and help transform community concerns into practical, sustainable solutions. We work with communities to identify priorities, engage the appropriate institutions, advocate for accountability and support initiatives that improve people's lives.</p>
        <div class="about-three"><section><b>01</b><h3>Community First</h3><p>We listen before we act, ensuring our work responds to the real needs and aspirations of communities.</p></section><section><b>02</b><h3>Partnership over Confrontation</h3><p>Respectful engagement, collaboration and evidence-based advocacy produce more sustainable outcomes than conflict alone.</p></section><section><b>03</b><h3>From Ideas to Action</h3><p>We build partnerships, support implementation and contribute to long-term solutions that strengthen governance, economic participation and community wellbeing.</p></section></div>
        <p>Whether facilitating dialogue between communities and government, promoting youth opportunities, supporting local economic development or strengthening civic participation, Phakama Eastern Cape remains committed to building an Eastern Cape where everyone has a role to play in shaping a better future.</p>
      </article>
      <article class="about-chapter" id="our-journey">
        <span class="tag orange-tag">03 - Our Journey</span><h2>From Vision to Institution</h2>
        <div class="journey-block"><span>01</span><div><h3>The Beginning</h3><p>Every institution begins with an idea. On 20 September 2025, Phakama Eastern Cape was launched with a simple but ambitious vision: to build a people-powered civic movement that would help communities shape a better future for the Eastern Cape.</p><p>Phakama Eastern Cape began - and continues to operate - without an office, without operational funding and without paid employees. The organisation has been built through volunteers investing their time, professional expertise and personal resources to transform a shared vision into a growing civic institution.</p><p>Our purpose was never simply to establish another organisation. It was to build a trusted civic movement capable of working alongside communities to strengthen governance, expand opportunities and promote sustainable development across the Eastern Cape. Today, that founding vision continues to guide everything we do.</p></div></div>
        <div class="journey-block"><span>02</span><div><h3>Building the Foundation</h3><p>Building a new organisation has required resilience, commitment and continuous learning. The Interim Provincial Executive Committee was entrusted with establishing governance systems, organisational structures and institutional credibility while preparing the organisation for its first democratic leadership transition through the First Elective Provincial Imbizo and Annual General Meeting.</p><p>As communities called upon Phakama Eastern Cape to assist with governance challenges, development initiatives and advocacy, the organisation chose to grow while serving communities. Without operational funding, volunteers invested thousands of hours developing policies, building partnerships and responding to priorities across the province, often contributing personal resources.</p><h4>Key milestones achieved include:</h4><ul class="about-bullets"><li>Registration as a Non-Profit Company (NPC).</li><li>Registration as a Non-Profit Organisation (NPO) with the Department of Social Development.</li><li>Development of key governance, financial and operational systems.</li><li>Adoption of the Strategic Plan (2025-2027).</li><li>Development of core organisational policies and governance frameworks, with more being developed as the organisation grows.</li><li>Establishment of regional structures and Portfolio Committees.</li><li>Creation of Phakama Eastern Cape's organisational identity, branding and communication platforms.</li><li>Delivery of community interventions and development programmes across the Eastern Cape.</li><li>Development of strategic partnerships across government, academia, business and civil society.</li></ul><p>Every achievement reflects volunteers who gave their time, expertise and personal resources to build an institution capable of serving communities for generations.</p></div></div>
        <div class="journey-block"><span>03</span><div><h3>Growing Through Partnerships</h3><p>From its earliest days, Phakama Eastern Cape recognised that no single organisation can transform the Eastern Cape alone. Our approach has therefore been built around collaboration.</p><p>Today, Phakama Eastern Cape works alongside communities, government departments, municipalities, traditional leadership, universities, TVET Colleges, business, faith-based organisations, civil society organisations, professional networks and development partners.</p><p>These relationships strengthen our ability to create practical solutions, facilitate dialogue, strengthen accountability and support community-led development. Success is measured not only by organisational growth, but by the strength of the relationships we build and the positive difference they make.</p></div></div>
        <div class="journey-block"><span>04</span><div><h3>Looking Ahead</h3><p>Guided by our Strategic Plan (2025-2027), we are entering the next phase of organisational development - strengthening governance, expanding regional structures, deepening strategic partnerships and increasing impact across the Eastern Cape.</p><p>The organisation is preparing for its First Elective Provincial Imbizo and Annual General Meeting, where members will democratically elect the first permanent Provincial Executive Committee and mark the transition from the founding phase to a fully constituted organisation.</p><p>As communities continue placing their trust in Phakama Eastern Cape, the organisation remains committed to participating in democratic processes where communities believe this is the most effective way of advancing accountable leadership and sustainable development.</p><p>One principle remains unchanged: <strong>Phakama Eastern Cape is a civic movement first.</strong> Our purpose remains to work alongside communities in Rescuing and Reviving the Eastern Cape.</p></div></div>
      </article>
      <article class="about-chapter" id="governance">
        <span class="tag green-tag">04 - Governance &amp; Organisational Structure</span><h2>Leading Through Service, Accountability and Community</h2>
        <p>Phakama Eastern Cape is built on the belief that leadership is a responsibility to serve communities, not a position of privilege. Our governance framework combines community participation, strategic leadership and professional expertise so decisions remain accountable to the people we serve while supporting long-term sustainability.</p><p>As a volunteer-led civic movement, our leaders work alongside communities, partners and volunteers to strengthen governance, expand opportunities and advance sustainable development throughout the Eastern Cape.</p>
        <div class="governance-grid"><section><h3>Our Leadership</h3><h4>Interim Provincial Executive Committee</h4><p>Phakama Eastern Cape is currently led by an Interim Provincial Executive Committee established to implement the Founding Mandate and oversee institutional development.</p><p>It implements the Strategic Plan, establishes governance and operational systems, coordinates provincial programmes, develops strategic partnerships, supports regional structures and prepares for the First Elective Provincial Imbizo and permanent leadership election.</p><p>The Committee remains in office until members elect permanent leadership in accordance with the Constitution.</p></section><section><h3>Provincial Council</h3><p>The Provincial Council will become Phakama Eastern Cape's highest decision-making body following the First Elective Provincial Imbizo and Annual General Meeting.</p><p>It will provide strategic direction, approve organisational policy and oversee governance under the Constitution. Until then, responsibilities remain with the Interim Provincial Executive Committee under the Founding Mandate.</p></section><section><h3>Regional, Municipal &amp; Community Structures</h3><p>Located throughout the Eastern Cape, these structures engage communities, identify local priorities, coordinate programmes, strengthen civic participation, build partnerships and provide feedback to provincial leadership.</p><p>This keeps organisational decisions informed by community realities rather than driven solely from the provincial level.</p></section><section><h3>Portfolio Committees</h3><p>These internal working structures are made up of committed members who volunteer their time, knowledge and experience. They combine community leadership, practical and lived experience, professional expertise and a passion for service.</p><p>Working with the Interim Provincial Executive Committee, they design programmes, coordinate projects, build partnerships, provide strategic and technical input and support implementation.</p></section></div>
        <div class="committee-panel"><section><h3>Current Operational Committees</h3><ul><li>Education</li><li>Local Economic Development &amp; Small Business</li><li>Faith, Religion &amp; Traditions</li><li>Agriculture, Forestry &amp; Food Security</li></ul></section><section><h3>Emerging Portfolio Committees</h3><p>Several additional Portfolio Committees have been formally established and will become operational as regional structures, the volunteer base and programme portfolio expand.</p></section><section><h3>Professional Services Network</h3><p>The Network provides voluntary professional expertise across multiple disciplines. Professionals contribute strategic advice, mentoring, technical support and specialist knowledge, combining community leadership with professional excellence and giving communities access to high-quality support.</p></section></div>
      </article>
      <article class="about-chapter" id="governance-principles">
        <span class="tag orange-tag">Governance Principles</span><h2>Five principles guide every decision.</h2>
        <div class="principle-list"><section><b>01</b><h3>Community Accountability</h3><p>Communities remain at the centre of organisational decision-making.</p></section><section><b>02</b><h3>Ethical Leadership</h3><p>Leadership is exercised with integrity, transparency and accountability.</p></section><section><b>03</b><h3>Participation</h3><p>Members and communities actively contribute to organisational development.</p></section><section><b>04</b><h3>Professional Governance</h3><p>Policies, systems and decisions are guided by sound governance practices.</p></section><section><b>05</b><h3>Continuous Improvement</h3><p>We continuously strengthen our systems, leadership and organisational capacity.</p></section></div>
      </article>
      <article class="about-chapter" id="organogram">
        <span class="tag green-tag">Organisational Structure</span><h2>Connected leadership, expertise and community structures.</h2><p>This structure illustrates the relationship between the Provincial Council, Interim Provincial Executive Committee, Portfolio Committees, Professional Services Network and Regional Structures.</p>
        <div class="organogram" role="img" aria-label="Phakama Eastern Cape organisational structure"><div class="org-node org-top">Provincial Council</div><div class="org-line"></div><div class="org-node org-exec">Interim Provincial Executive Committee</div><div class="org-branches"><div class="org-node">Portfolio Committees</div><div class="org-node">Professional Services Network</div><div class="org-node">Regional Structures</div></div><div class="org-line"></div><div class="org-node org-community">Municipal &amp; Community Structures</div></div>
      </article>
    </section>
    
    <section class="about-join"><h2>Working together to Rescue and Revive the Eastern Cape.</h2><a href="become-a-member.html">Join the Movement <span>→</span></a></section>
    <section class="about-footer">
      <div><h2>Phakama Eastern Cape.</h2><p>A civic movement dedicated to the resurgence of the Eastern Cape - registered NPC &amp; DSD-registered NPO.</p><small>Contact Details</small><a href="mailto:info@phakamaec.org.za">info@phakamaec.org.za</a><a href="tel:+27799200361">+27 (0)79 920 0361</a><small>Follow Us</small><div class="social-icons"><a href="https://www.tiktok.com/@phakama.ec?_r=1&amp;_t=ZS-98NveYnJPaj" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><img class="social-icon tiktok" src="https://cdn.simpleicons.org/tiktok/FFFFFF" alt="" loading="lazy"><span>TikTok</span></a><a href="https://www.facebook.com/profile.php?id=61591961061514" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img class="social-icon facebook" src="https://cdn.simpleicons.org/facebook/FFFFFF" alt="" loading="lazy"><span>Facebook</span></a><a href="https://www.instagram.com/phakama_easterncape/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img class="social-icon instagram" src="https://cdn.simpleicons.org/instagram/FFFFFF" alt="" loading="lazy"><span>Instagram</span></a></div></div>
      <div><span class="tag soft-resource">Quick Links</span><a href="index.html">Home</a><a href="about-phakama.html">About Us</a><a href="index.html#impact">Our Impact</a><a href="focus-areas.html">Programmes</a><a href="news.html">News &amp; Media</a><a href="events.html">Events</a><a href="become-a-member.html">Get Involved</a><a href="contact.html">Contact Us</a></div>
      <div><span class="tag soft-resource">Resources</span><p>No resources are available yet.<br>Documents will be placed here soon.</p></div>
      <div class="about-footer-action"><span class="tag orange-tag">Action</span><h3>Step Off<br>the<br>Sidelines.</h3><a href="become-a-member.html">Become a Member</a><a href="donate.html">Donate</a><a href="partner-with-us.html">Partner With Us</a></div>
    </section>`;
}
if(key==="focus-areas"){
  document.body.classList.add("rich-page");
  document.querySelector("#pageContent").innerHTML=`
    <section class="rich-intro"><span class="tag green-tag">Our Work</span><h2>Building stronger communities through three Strategic Pillars.</h2><p>Our pillars work together to strengthen governance, expand economic opportunities and build safer, more resilient communities across the Eastern Cape.</p></section>
    <section class="pillar-stack">
      <article><b>01</b><div><h2>Governance &amp; Accountability</h2><h3>Ethical Leadership. Active Citizenship. Accountable Government.</h3><p>We work with communities, public institutions and strategic partners to strengthen ethical leadership, public accountability and citizen participation.</p><ul><li>Ethical leadership and good governance</li><li>Civic education and active citizenship</li><li>Public accountability and transparency</li><li>Service delivery improvement</li><li>Community advocacy and policy dialogue</li><li>Rule of law, constitutional governance and community safety</li></ul></div></article>
      <article class="orange"><b>02</b><div><h2>Economic Development</h2><h3>Building Local Economies. Creating Sustainable Opportunities.</h3><p>This pillar creates opportunities that improve livelihoods, strengthen local economies and promote sustainable community wealth.</p><ul><li>Entrepreneurship and small business</li><li>Agriculture and food security</li><li>Local economic development</li><li>Cooperatives and community-owned enterprises</li><li>Financial inclusion and skills development</li><li>Employment, investment and strategic partnerships</li></ul></div></article>
      <article><b>03</b><div><h2>Social Cohesion &amp; Community Development</h2><h3>Building Safe, Resilient and Inclusive Communities.</h3><p>We strengthen communities, support vulnerable groups and create opportunities for full social and economic participation.</p><ul><li>Education and youth development</li><li>Community leadership and volunteerism</li><li>Community partnerships</li><li>Social wellbeing and support for vulnerable groups</li><li>Community mobilisation</li><li>Social cohesion and active citizenship</li></ul></div></article>
    </section>
    <section class="rich-panel"><span class="tag orange-tag">Current Priorities</span><h2>Responding to community needs and opportunities.</h2><div class="approved-list"><article><h3>Education, Youth &amp; Skills Development</h3><p>Expanding access to education, career guidance, mentorship, skills development and opportunities that empower young people.</p></article><article><h3>Economic Empowerment &amp; Community Development</h3><p>Strengthening entrepreneurship, agriculture, financial inclusion, cooperatives and community-owned development initiatives.</p></article><article><h3>Governance, Accountability &amp; Active Citizenship</h3><p>Promoting ethical leadership, accountable governance, civic participation and improved public service delivery.</p></article><article><h3>Building a Strong Provincial Institution</h3><p>Strengthening governance systems, regional structures, strategic partnerships and the Professional Services Network to increase sustainable impact.</p></article></div></section>
    <section class="cross-pillar"><span class="tag green-tag">Working Across All Three Pillars</span><h2>Integrated programmes create wider impact.</h2><div class="cross-grid"><article><h3>Community Career Exhibition &amp; Rural Development Dialogue</h3><ul><li>Education &amp; Youth Development</li><li>Economic Development</li><li>Community Partnerships</li></ul></article><article><h3>Community Safety &amp; Rule of Law Campaign</h3><ul><li>Governance &amp; Accountability</li><li>Social Cohesion &amp; Community Development</li></ul></article><article><h3>Cooperative Financial Institution (CFI)</h3><ul><li>Economic Development</li><li>Community Empowerment</li><li>Financial Inclusion</li></ul></article><article><h3>Strategic Partnerships</h3><ul><li>Governance</li><li>Economic Development</li><li>Social Cohesion</li></ul></article></div></section>
    <section class="about-join impact-join"><h2>Explore how Phakama Eastern Cape creates impact across the province.</h2><div class="work-links"><a href="#">Governance &amp; Accountability</a><a href="#">Economic Development</a><a href="#">Social Cohesion &amp; Community Development</a><a href="#">Current Priorities</a></div></section>`;
}
if(key==="action-plan"){
  document.body.classList.add("rich-page");
  document.querySelector("#pageContent").innerHTML=`
    <section class="rich-intro"><span class="tag orange-tag">Our Impact</span><h2>Building a civic movement. Strengthening communities.</h2><p>Since September 2025, Phakama Eastern Cape has grown from a shared community vision into a recognised provincial civic movement built almost entirely through volunteer leadership and community support.</p></section>
    <section class="impact-facts"><article><b>2025</b><h3>Established</h3></article><article><b>NPC + NPO</b><h3>Registered</h3></article><article><b>3</b><h3>Strategic Pillars</h3></article><article><b>7</b><h3>Eastern Cape Regions</h3></article><article><b>100%</b><h3>Volunteer-Led</h3></article><article><b>Growing</b><h3>Province-Wide Partnerships</h3></article></section>
    <section class="impact-model"><span class="tag green-tag">How We Create Impact</span><h2>A community development model built on participation and shared ownership.</h2><ol><li><b>01</b><span>Communities identify local challenges.</span></li><li><b>02</b><span>Phakama Eastern Cape facilitates dialogue and collaboration.</span></li><li><b>03</b><span>Professional expertise and strategic partnerships support solutions.</span></li><li><b>04</b><span>Communities lead implementation.</span></li><li><b>05</b><span>Together we create lasting, sustainable impact.</span></li></ol></section>
    <section class="rich-panel"><span class="tag orange-tag">Institution Behind the Impact</span><h2>Strong impact requires a strong organisation.</h2><div class="approved-list"><article><h3>Registered &amp; Accountable</h3><p>Registered as both a Non-Profit Company and DSD Non-Profit Organisation.</p></article><article><h3>Governance Systems</h3><p>Financial, operational and governance systems with policies and strategic plans.</p></article><article><h3>Community Structures</h3><p>Regional structures and Portfolio Committees connect strategy to community realities.</p></article><article><h3>Strategic Influence</h3><p>Partnerships across government, education, business, traditional leadership and civil society.</p></article></div></section>
    <section class="impact-story"><span class="tag orange-tag">Impact at a Glance</span><h2>Practical solutions that improve people's lives.</h2><p>Every programme, partnership and intervention contributes to our mission of rescuing and reviving the Eastern Cape. Our impact is measured not only by numbers, but by stronger communities, better partnerships and practical solutions.</p><p>Working alongside communities, government, traditional leadership, educational institutions, business and civil society, we continue building partnerships that create practical solutions and lasting community impact.</p></section>
    <section class="impact-pillars"><span class="tag green-tag">Impact Through Our Strategic Pillars</span><h2>Responding to diverse community needs.</h2><div class="about-three"><section><b>01</b><h3>Governance &amp; Accountability</h3><p>Ethical leadership, accountable governance, active citizenship and improved public service delivery through constructive engagement.</p></section><section><b>02</b><h3>Economic Development</h3><p>Entrepreneurship, agriculture, financial inclusion, cooperatives and sustainable local economic development.</p></section><section><b>03</b><h3>Social Cohesion &amp; Community Development</h3><p>Safe, resilient and inclusive communities through education, youth development, volunteerism, partnerships and social wellbeing.</p></section></div></section>
    <section class="impact-story"><span class="tag orange-tag">Growing Our Influence</span><h2>Partnerships expand reach and opportunity.</h2><p>Phakama Eastern Cape continues strengthening relationships with communities, government departments, municipalities, traditional leadership, universities, TVET Colleges, business, civil society and development partners.</p><p>These partnerships increase opportunities for collaboration while expanding our reach and impact across the province.</p></section>
    <section class="volunteer-impact"><div><span class="tag pale-tag">Built by Volunteers. Driven by Purpose.</span><h2>Citizens power every milestone.</h2><p>Phakama Eastern Cape has been built almost entirely through citizens who freely contribute their time, skills, professional expertise and leadership. Working without operational funding, volunteers invest their knowledge, experience and personal commitment to keep communities at the centre of everything we do.</p></div><a href="volunteer.html">Volunteer With Us</a></section>
    <section class="rich-panel"><span class="tag green-tag">Looking Ahead</span><h2>Our focus remains clear.</h2><div class="approved-list"><article><h3>Accountable Governance</h3><p>Strengthen ethical and accountable governance.</p></article><article><h3>Strategic Partnerships</h3><p>Expand relationships that create sustainable impact.</p></article><article><h3>Regional Structures</h3><p>Grow community-based structures across the province.</p></article><article><h3>Community Impact</h3><p>Increase practical interventions and measurable results.</p></article><article><h3>Sustainable Institution</h3><p>Build a civic institution that serves future generations.</p></article></div><p>Guided by our Strategic Plan (2025-2027), we remain committed to working alongside communities to Rescue and Revive the Eastern Cape.</p></section>
    <section class="impact-explore"><span class="tag orange-tag">Explore Our Impact</span><h2>Stories, progress and practical solutions.</h2><div class="approved-list"><article><h3>Impact at a Glance</h3><p>Explore key organisational milestones, growth indicators and progress across the Eastern Cape.</p></article><article><h3>Case Studies</h3><p>Examples of communities and partners addressing local challenges and strengthening governance.</p></article><article><h3>Community Success Stories</h3><p>Stories of communities, volunteers, partners and organisations working together for positive change.</p></article><article><h3>Impact Portfolio</h3><p>Coming soon: programmes, interventions, partnerships, research, publications and organisational achievements.</p></article></div></section>
    
    <section class="about-join impact-join"><h2>Built by volunteers. Driven by purpose.</h2><a href="volunteer.html">Volunteer With Us <span>→</span></a></section>`;
}
if(key==="partner-with-us"){
  document.body.classList.add("rich-page","partner-page");
  document.querySelector("#pageContent").innerHTML=`
    <section class="rich-intro"><span class="tag orange-tag">Partner With Us</span><h2>Building the Eastern Cape together.</h2><p>No single organisation can transform the Eastern Cape alone. We build trusted partnerships that combine community knowledge, professional expertise and shared resources to create practical, sustainable solutions.</p></section>
    <section class="rich-panel"><span class="tag green-tag">Why Partner with Phakama Eastern Cape?</span><h2>Shared values. Mutual respect. Measurable community impact.</h2><div class="approved-list"><article><h3>Community Relationships</h3><p>Work alongside a growing provincial movement rooted in Eastern Cape communities.</p></article><article><h3>Credible Governance</h3><p>Accountable organisational systems and experienced volunteer leadership.</p></article><article><h3>Multi-Sector Collaboration</h3><p>Connections across government, business, education, traditional leadership and civil society.</p></article><article><h3>Practical Implementation</h3><p>Community-based programmes focused on sustainable, long-term impact.</p></article></div></section>
    <section class="partnership-types"><h2>Partnership Opportunities</h2><div class="approved-list"><article><h3>Strategic Partnerships</h3><p>Long-term collaboration around shared objectives and sustainable impact.</p></article><article><h3>Programme Partnerships</h3><p>Joint planning and delivery of governance, education, economic and community programmes.</p></article><article><h3>Corporate Social Investment</h3><p>Support initiatives that create sustainable community impact.</p></article><article><h3>Professional Services</h3><p>Specialist expertise through the Professional Services Network.</p></article><article><h3>Research &amp; Policy</h3><p>Research, monitoring, evaluation, policy development and knowledge sharing.</p></article><article><h3>Programme Sponsorship</h3><p>Support projects, conferences, exhibitions and flagship initiatives.</p></article></div></section>
    <section class="partner-network"><span class="tag orange-tag">Partnership Network</span><h2>Collaboration across sectors.</h2><div class="network-grid"><article><h3>Government &amp; Public Institutions</h3><p>Buffalo City Metropolitan Municipality; Department of Education (OR Tambo); Department of Agriculture (OR Tambo); DEDEAT.</p></article><article><h3>Higher Education &amp; Skills</h3><p>Walter Sisulu, KSD TVET College and Ingwe TVET College.</p></article><article><h3>Traditional Leadership</h3><p>AbaThembu Kingdom, His Majesty King Buyelekhaya Dalindyebo and Nkosi Nosandla Pangalele.</p></article><article><h3>Faith &amp; Community</h3><p>OR Tambo Ministers Fraternal and community-led civic organisations across the province.</p></article><article><h3>Business &amp; Development</h3><p>Enterprise, economic-development, research, advisory and donor relationships continue to grow.</p></article><article><h3>Professional Services Network</h3><p>Law, governance, education, finance, media, agriculture, engineering, health, IT and community development.</p></article></div></section>
    <section class="partner-values"><span class="tag green-tag">Why Partner With Phakama Eastern Cape?</span><h2>Shared values. Mutual respect. Measurable community impact.</h2><div class="value-grid"><article>Shared purpose and community impact</article><article>Integrity, accountability and transparency</article><article>Collaborative problem-solving</article><article>Sustainable development</article><article>Evidence-based advocacy</article><article>Long-term relationships rather than once-off projects</article></div><p>Together we strengthen governance, expand economic opportunities, empower communities and contribute to building a better Eastern Cape.</p></section>
    <section class="partner-benefits"><span class="tag orange-tag">Why Organisations Choose Phakama Eastern Cape</span><h2>A growing provincial movement committed to ethical leadership.</h2><ul class="about-bullets"><li>Strong community relationships across the Eastern Cape.</li><li>Credible governance and accountable organisational systems.</li><li>Multi-sector collaboration connecting communities, government, business and civil society.</li><li>Experienced volunteer leadership supported by professional expertise.</li><li>Practical implementation of community-based programmes.</li><li>A shared commitment to measurable, long-term community impact.</li></ul></section>
    <section class="collaboration-directory"><span class="tag green-tag">Current Strategic Partners &amp; Collaborations</span><h2>Relationships that strengthen our reach and impact.</h2><p>Some relationships are formalised through Memoranda of Understanding or Partnership Agreements, while others involve programme collaboration, technical support, strategic dialogue or community-based initiatives.</p><div class="directory-grid"><article><h3>Government &amp; Public Institutions</h3><p>Strengthening governance, service delivery and community development.</p><ul><li>Buffalo City Metropolitan Municipality</li><li>Department of Education - OR Tambo District</li><li>Department of Agriculture - OR Tambo District</li><li>Department of Economic Development, Environmental Affairs and Tourism (DEDEAT)</li></ul></article><article><h3>Higher Education &amp; Skills Development</h3><p>Education, research, innovation and lifelong learning.</p><ul><li>Walter Sisulu</li><li>KSD TVET College</li><li>Ingwe TVET College</li></ul></article><article><h3>Traditional Leadership</h3><p>Community strength, social cohesion and sustainable rural development.</p><ul><li>AbaThembu Kingdom</li><li>His Majesty King Buyelekhaya Dalindyebo</li><li>Nkosi Nosandla Pangalele</li></ul></article><article><h3>Faith-Based Organisations</h3><p>Social cohesion, community wellbeing and active citizenship.</p><ul><li>OR Tambo Ministers Fraternal</li></ul></article><article><h3>Community &amp; Civic Organisations</h3><p>Community-driven development, advocacy and local leadership.</p><ul><li>KSD Truck Association</li><li>Port St Johns Development Crisis Committee</li><li>King Sports Veterans Association (KSVA)</li><li>Andile Fikizolo Initiative</li><li>Civil Society Unmuted Coalition South Africa (CSUCSA)</li></ul></article><article><h3>Business, Enterprise &amp; Economic Development</h3><p>Partnership discussions and strategic engagements.</p><ul><li>NAFCOC Retail Chamber (NAFRET)</li><li>Milvets Pamoja Project</li></ul></article><article><h3>Research, Innovation &amp; Strategic Advisory</h3><p>Research, learning, policy development and evidence-based decision-making.</p><ul><li>Professor Luswazi</li></ul></article><article><h3>Development Partners</h3><p>Active engagement with local and international partners, philanthropic foundations and donor organisations committed to accountable leadership, sustainable development and community empowerment.</p></article><article><h3>Corporate Sponsors &amp; Donors</h3><p>Financial and in-kind support expands community programmes, strengthens organisational capacity and enables initiatives that create lasting impact.</p></article></div></section>
    <section class="partner-growth"><span class="tag orange-tag">Building New Partnerships</span><h2>Our Partnership Network continues to grow.</h2><p>Some partnerships are well established while others are in the early stages of collaboration. Every relationship is built on shared values, mutual respect and a commitment to improving the lives of Eastern Cape communities.</p><p>We welcome organisations, institutions, businesses and professionals who share our vision of strengthening communities through accountable leadership, sustainable development and active citizenship.</p></section>
    <section class="professional-network"><div><span class="tag pale-tag">Professional Services Network</span><h2>Professional expertise in service of communities.</h2><p>Experienced professionals voluntarily contribute knowledge, skills and experience to strengthen governance, organisational development and community impact. They work alongside the Provincial Executive Committee, Portfolio Committees, Regional Structures and volunteers through strategic advice, technical expertise, mentoring and project support.</p></div><div><h3>Areas of expertise</h3><ul><li>Law</li><li>Governance</li><li>Education</li><li>Finance</li><li>Communications &amp; Media</li><li>Agriculture</li><li>Engineering</li><li>Health</li><li>Research &amp; Policy</li><li>Business Development</li><li>Information Technology</li><li>Community Development</li></ul><a href="#partnership-enquiry">Join the Professional Services Network</a></div></section>
    <section class="partner-call"><span class="tag green-tag">Partnership Enquiry</span><h2>We would love to hear from you.</h2><p>Work with us to collaborate on a community programme, provide professional expertise, sponsor an initiative, support research or explore a strategic partnership.</p><ul class="about-bullets"><li>Partner on a community development programme.</li><li>Sponsor a Phakama Eastern Cape initiative or event.</li><li>Provide expertise through our Professional Services Network.</li><li>Collaborate on research or policy development.</li><li>Support youth, education or economic development programmes.</li><li>Explore a long-term strategic partnership.</li></ul></section>
    
    <section class="partner-form-section" id="partnership-enquiry"><div><span class="tag green-tag">Partnership Enquiry</span><h2>Let's build something meaningful together.</h2><p>Tell us how your organisation or professional expertise can support stronger Eastern Cape communities.</p></div><form class="partner-form" action="https://formsubmit.co/aphiko2@gmail.com" method="POST"><input type="hidden" name="_subject" value="New Phakama Eastern Cape Partnership Enquiry"><input type="hidden" name="_template" value="table"><input type="hidden" name="_captcha" value="true"><input class="form-honeypot" name="_honey" tabindex="-1" autocomplete="off"><label>Name<input name="name" required></label><label>Organisation<input name="organisation" required></label><label>Email<input name="email" type="email" required></label><label>Phone<input name="phone" type="tel"></label><label class="wide">Partnership Interest<select name="partnershipType" required><option value="">Select</option><option>Strategic Partnership</option><option>Programme Partnership</option><option>Corporate Social Investment</option><option>Professional Services</option><option>Research and Policy</option><option>Programme Sponsorship</option></select></label><label class="wide">Message<textarea name="message" rows="5" required></textarea></label><label class="consent wide"><input type="checkbox" required><span>I consent to being contacted about this partnership enquiry.</span></label><button class="wide" type="submit">Submit Partnership Enquiry →</button></form></section>`;
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
              <li>Acknowledge Phakama Eastern Cape's non-partisan status and will not use it for party-political purposes.</li>
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
