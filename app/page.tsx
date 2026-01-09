import { Mail, Phone, MapPin } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="w-36 h-36 rounded-full bg-teal-700 flex items-center justify-center mx-auto mb-6 text-5xl font-bold border-4 border-teal-500">
            SS
          </div>
          <h1 className="text-4xl font-bold mb-2 font-sans">Sarath Sriram A</h1>
          <p className="text-teal-400 text-xl mb-6">Aspiring Data Scientist | MSc Data Science Student</p>
          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="mailto:sarathanbu2020@gmail.com"
              className="text-slate-300 hover:text-teal-400 flex items-center gap-2 transition-colors"
            >
              <Mail size={20} />
              sarathanbu2020@gmail.com
            </a>
            <a
              href="tel:+919345823506"
              className="text-slate-300 hover:text-teal-400 flex items-center gap-2 transition-colors"
            >
              <Phone size={20} />
              +91 9345823506
            </a>
            <span className="text-slate-300 flex items-center gap-2">
              <MapPin size={20} />
              Dharmapuri, Tamil Nadu
            </span>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-1 after:bg-teal-700 after:rounded">
            About Me
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <p className="text-slate-500 text-lg leading-relaxed">
              I'm a passionate Data Science student at Amrita Vishwa Vidyapeetham, pursuing my Integrated MSc in Data
              Science. My goal is to develop proficiency in programming languages like Python and R, along with
              mastering tools such as SQL, Excel, and data visualization platforms like Tableau and Power BI. I'm
              dedicated to mastering data analysis and statistical techniques to extract meaningful insights from
              complex datasets.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-1 after:bg-teal-700 after:rounded">
            Education
          </h2>
          <div className="grid gap-6">
            <EducationCard
              degree="Integrated MSc Data Science"
              institution="Amrita Vishwa Vidyapeetham, Coimbatore"
              period="2022 - 2027"
              grade="CGPA: 7.75/10"
            />
            <EducationCard
              degree="Higher Secondary Education"
              institution="Senthil Public School, Dharmapuri"
              period="2020 - 2022 | CBSE"
              grade="82%"
            />
            <EducationCard
              degree="Secondary Education"
              institution="Senthil Public School, Dharmapuri"
              period="2018 - 2020 | CBSE"
              grade="88%"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-1 after:bg-teal-700 after:rounded">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCategory title="Python" icon="🐍" skills={["NumPy", "Pandas", "Seaborn", "NLP"]} />
            <SkillCategory title="Database" icon="🗄️" skills={["SQL", "Database Management"]} />
            <SkillCategory title="Analytics" icon="📊" skills={["R Programming", "Power BI", "Data Visualization"]} />
            <SkillCategory title="Machine Learning" icon="🤖" skills={["Text Classification", "Naive Bayes", "NLP"]} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-1 after:bg-teal-700 after:rounded">
            Projects
          </h2>
          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Spam Email Detection</h3>
            <p className="text-slate-500 mb-5">
              Classify emails as spam or not spam using basic text classification techniques to improve email filtering
              and user experience.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Python", "NLP", "Naive Bayes", "Text Preprocessing"].map((tech) => (
                <span key={tech} className="bg-teal-700 text-white px-4 py-1.5 rounded-md text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
            <div className="bg-emerald-50 border-l-4 border-teal-700 p-4 rounded-r-lg">
              <strong>Outcome:</strong> Successfully built a classifier that accurately detects whether an email is spam
              or not spam, demonstrating practical application of machine learning in email security.
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-1 after:bg-teal-700 after:rounded">
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <CertCard title="SQL (Database)" platform="Certified" icon="🗄️" />
            <CertCard title="R Programming" platform="Coursera" icon="📈" />
            <CertCard title="Python" platform="HackerRank" icon="🐍" />
            <CertCard title="Power BI" platform="Coursera (In Progress)" icon="📊" inProgress />
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-1 after:bg-teal-700 after:rounded">
            Interests & Activities
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: "⚽", label: "Football" },
              { icon: "🏏", label: "Cricket" },
              { icon: "🤼", label: "Kabaddi (Zonal & District Level)" },
              { icon: "🎬", label: "Movies" },
              { icon: "🗣️", label: "English" },
              { icon: "🗣️", label: "Tamil" },
            ].map((interest) => (
              <div
                key={interest.label}
                className="bg-slate-100 px-6 py-4 rounded-full shadow-sm flex items-center gap-3 font-medium"
              >
                <span>{interest.icon}</span>
                {interest.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 text-center py-10">
        <p className="text-sm">© 2026 Sarath Sriram A. All rights reserved.</p>
        <p className="text-sm mt-2">Open to opportunities in Data Science & Analytics</p>
      </footer>
    </div>
  )
}

function EducationCard({
  degree,
  institution,
  period,
  grade,
}: { degree: string; institution: string; period: string; grade: string }) {
  return (
    <div className="bg-slate-50 p-7 rounded-2xl shadow-sm border-l-4 border-teal-700">
      <h3 className="text-xl font-bold mb-2">{degree}</h3>
      <p className="text-teal-700 font-medium mb-2">{institution}</p>
      <p className="text-slate-500 text-sm mb-2">{period}</p>
      <span className="bg-slate-100 px-3 py-1 rounded-full text-sm font-medium text-teal-700">{grade}</span>
    </div>
  )
}

function SkillCategory({ title, icon, skills }: { title: string; icon: string; skills: string[] }) {
  return (
    <div className="bg-white p-7 rounded-2xl shadow-sm">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-slate-100 text-slate-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 hover:text-white transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function CertCard({
  title,
  platform,
  icon,
  inProgress = false,
}: { title: string; platform: string; icon: string; inProgress?: boolean }) {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-sm text-center hover:-translate-y-1 transition-transform ${inProgress ? "border-2 border-dashed border-teal-700" : ""}`}
    >
      <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
        {icon}
      </div>
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-slate-500 text-sm">{platform}</p>
    </div>
  )
}
