import { Icon } from "@iconify/react";
import { IMAGES } from '@/assets/images';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const skills = [
    {
      icon: "devicon:docker",
      title: "Containerization & Orchestration",
      description: "Expert in Docker, Kubernetes, and container orchestration for scalable microservices architecture."
    },
    {
      icon: "devicon:amazonwebservices",
      title: "Cloud Infrastructure",
      description: "Proficient in AWS, Azure, and GCP for building robust, scalable cloud solutions."
    },
    {
      icon: "simple-icons:jenkins",
      title: "CI/CD Pipelines",
      description: "Automated deployment pipelines using Jenkins, GitLab CI, GitHub Actions, and Azure DevOps."
    },
    {
      icon: "devicon:terraform",
      title: "Infrastructure as Code",
      description: "Infrastructure automation using Terraform, Ansible, and CloudFormation for consistent deployments."
    },
    {
      icon: "simple-icons:prometheus",
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring solutions with Prometheus, Grafana, ELK Stack, and Datadog."
    },
    {
      icon: "devicon:linux",
      title: "System Administration",
      description: "Deep expertise in Linux systems, shell scripting, and server management."
    }
  ];

  const projects = [
    {
      image: IMAGES.CLOUD_INFRA_1,
      title: "Multi-Cloud Infrastructure Platform",
      description: "Designed and implemented a hybrid cloud infrastructure spanning AWS, Azure, and GCP with automated failover and disaster recovery.",
      technologies: ["AWS", "Azure", "Terraform", "Kubernetes"],
      metrics: "99.9% uptime, 40% cost reduction"
    },
    {
      image: IMAGES.PIPELINE_2,
      title: "Enterprise CI/CD Pipeline",
      description: "Built comprehensive CI/CD pipeline serving 50+ microservices with automated testing, security scanning, and deployment.",
      technologies: ["Jenkins", "Docker", "SonarQube", "Helm"],
      metrics: "80% faster deployments, Zero downtime"
    },
    {
      image: IMAGES.MONITORING_1,
      title: "Observability & Monitoring Stack",
      description: "Implemented full-stack monitoring solution with custom dashboards, alerting, and log aggregation for enterprise applications.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Jaeger"],
      metrics: "95% issue detection improvement"
    },
    {
      image: IMAGES.CONTAINERS_1,
      title: "Kubernetes Migration Project",
      description: "Led migration of legacy monolithic applications to containerized microservices architecture on Kubernetes.",
      technologies: ["Kubernetes", "Docker", "Istio", "ArgoCD"],
      metrics: "300% scalability increase"
    },
    {
      image: IMAGES.CLOUD_INFRA_5,
      title: "Infrastructure Automation Suite",
      description: "Developed comprehensive infrastructure automation using Infrastructure as Code principles and GitOps workflows.",
      technologies: ["Terraform", "Ansible", "GitLab CI", "Vault"],
      metrics: "90% manual task reduction"
    },
    {
      image: IMAGES.MONITORING_4,
      title: "Performance Optimization Platform",
      description: "Built automated performance monitoring and optimization platform reducing application response times significantly.",
      technologies: ["New Relic", "Datadog", "Python", "Redis"],
      metrics: "60% performance improvement"
    }
  ];

  const testimonials = [
    {
      quote: "Outstanding DevOps engineer who transformed our deployment process. Reduced our release cycle from weeks to hours with zero downtime deployments.",
      author: "Sarah Chen",
      role: "CTO, TechCorp",
      avatar: IMAGES.PROFILE_2
    },
    {
      quote: "Exceptional expertise in cloud architecture and automation. Built a robust infrastructure that scales seamlessly with our growing business needs.",
      author: "Michael Rodriguez",
      role: "VP Engineering, CloudScale",
      avatar: IMAGES.PROFILE_1
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect - Professional",
    "Certified Kubernetes Administrator (CKA)",
    "HashiCorp Certified: Terraform Associate",
    "Azure DevOps Engineer Expert",
    "Google Cloud Professional DevOps Engineer",
    "Docker Certified Associate"
  ];

  return (
    <div className="bg-[#0D0804] text-white min-w-[1000px]">
      {/* Hero Section */}
      <section className="relative min-h-[900px] flex items-center overflow-hidden bg-cover bg-center" 
               style={{ backgroundImage: `linear-gradient(rgba(13, 8, 4, 0.7), rgba(13, 8, 4, 0.7)), url(${IMAGES.MONITORING_10})` }}>
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 px-12 xl:px-24 py-4">
          <div className="flex justify-between items-center">
            <div className="text-4xl font-bold flex items-center">
              <div>DEV</div>
              <div className="text-orange-500 inline-block">O</div>
              <div>PS</div>
            </div>
            <div className="hidden xl:flex flex-1 justify-center items-center gap-6 xl:gap-8">
              <div className="text-white hover:text-orange-500 transition cursor-pointer">About</div>
              <div className="text-white hover:text-orange-500 transition cursor-pointer">Skills</div>
              <div className="text-white hover:text-orange-500 transition cursor-pointer">Projects</div>
              <div className="text-white hover:text-orange-500 transition cursor-pointer">Experience</div>
              <div className="text-white hover:text-orange-500 transition cursor-pointer">Contact</div>
            </div>
            <Button className="px-5 py-3 bg-orange-500 rounded-full text-white font-medium hover:bg-orange-600 transition">
              HIRE ME
            </Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-12 xl:px-24 py-32">
          <div className="flex gap-8 xl:gap-12 items-center justify-between">
            <div className="flex-1 xl:max-w-2xl">
              <h1 className="text-7xl font-semibold leading-tight mb-4">
                DevOps Engineer & Cloud Architect
              </h1>
              <p className="text-[#A1A1A1] font-[300] leading-7 mb-8">
                Transforming development workflows with cutting-edge automation,<br/>
                scalable cloud infrastructure, and robust CI/CD pipelines.
              </p>
              <div className="flex gap-4">
                <Button className="px-6 py-4 bg-orange-500 rounded-full text-white font-medium hover:bg-orange-600 transition">
                  VIEW PROJECTS
                </Button>
                <Button variant="outline" className="px-6 py-4 rounded-full border-gray-700 text-white hover:bg-white/10">
                  DOWNLOAD CV
                </Button>
              </div>
            </div>
            
            {/* Contact Card */}
            <div className="w-full max-w-[460px] p-6 bg-[#0D0804] rounded-3xl border border-gray-700">
              <div className="flex flex-col gap-6">
                <div className="p-3 rounded-2xl border border-gray-700 flex items-start gap-3">
                  <div className="p-3 bg-[rgba(238,131,28,0.2)] rounded-full flex-shrink-0">
                    <Icon icon="ph:envelope" className="text-[24px] text-[#ee831d]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-[300] mb-1">EMAIL</div>
                    <div className="text-base font-semibold">devops@portfolio.com</div>
                  </div>
                </div>
                <div className="p-3 rounded-2xl border border-gray-700 flex items-start gap-3">
                  <div className="p-3 bg-[rgba(238,131,28,0.2)] rounded-full flex-shrink-0">
                    <Icon icon="ph:phone" className="text-[24px] text-[#ee831d]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-[300] mb-1">PHONE</div>
                    <div className="text-base font-semibold">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="p-3 rounded-2xl border border-gray-700 flex items-start gap-3">
                  <div className="p-3 bg-[rgba(238,131,28,0.2)] rounded-full flex-shrink-0">
                    <Icon icon="ph:map-pin" className="text-[24px] text-[#ee831d]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-[300] mb-1">LOCATION</div>
                    <div className="text-base font-semibold">San Francisco, CA</div>
                  </div>
                </div>
                <div className="p-3 rounded-2xl border border-gray-700 flex items-start gap-3">
                  <div className="p-3 bg-[rgba(238,131,28,0.2)] rounded-full flex-shrink-0">
                    <Icon icon="ph:calendar" className="text-[24px] text-[#ee831d]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-[300] mb-1">AVAILABILITY</div>
                    <div className="text-base font-semibold">Available for Projects</div>
                  </div>
                </div>
                <Button className="w-full px-6 py-4 bg-orange-500 rounded-full text-white font-medium hover:bg-orange-600 transition">
                  GET IN TOUCH
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-12 xl:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1.5 bg-[rgba(238,131,28,0.2)] rounded-full mb-4">
              <span className="text-orange-500 text-sm font-medium">Core Skills</span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-semibold mb-4">DevOps Expertise That Delivers</h2>
            <p className="text-[#A1A1A1] max-w-2xl mx-auto">
              Comprehensive DevOps skills spanning cloud platforms, automation, and modern infrastructure practices.
            </p>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="p-8 rounded-3xl border border-gray-700 bg-transparent flex flex-col items-center text-center gap-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Icon icon={skill.icon} className="text-[40px] text-[#ee831d]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-[#A1A1A1]">{skill.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-12 xl:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1.5 bg-[rgba(238,131,28,0.2)] rounded-full mb-4">
              <span className="text-orange-500 text-sm font-medium">Featured Projects</span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-semibold mb-4">Infrastructure Solutions That Scale</h2>
            <p className="text-[#A1A1A1] max-w-2xl mx-auto">
              Real-world DevOps projects showcasing automation, scalability, and operational excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 mb-8">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="h-80 rounded-3xl overflow-hidden">
                  <img className="w-full h-full object-cover" src={project.image} alt={project.title} />
                </div>
                <div className="pb-4 border-b border-gray-700 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-[#A1A1A1] mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className="bg-orange-500/20 text-orange-500 hover:bg-orange-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-[2px] mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} icon="mdi:star" className="text-[#EAB308] text-[20px]" />
                      ))}
                    </div>
                    <span className="text-sm text-[#A1A1A1]">Enterprise Grade</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-orange-500 font-semibold">{project.metrics}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button className="px-6 py-4 bg-orange-500 rounded-full text-white font-medium hover:bg-orange-600 transition">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-10 xl:px-20 py-20">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-stretch">
          <div className="flex-1 pr-8">
            <div className="mb-12">
              <div className="inline-block px-3 py-1.5 bg-[rgba(238,131,28,0.2)] rounded-full mb-4">
                <span className="text-orange-500 text-sm font-medium">Why Choose Me</span>
              </div>
              <h2 className="text-4xl xl:text-5xl font-semibold mb-4">DevOps Excellence in Action</h2>
              <p className="text-[#A1A1A1]">
                Proven track record of transforming development workflows and building resilient infrastructure.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="pb-6 border-b border-gray-700 flex gap-4">
                <div className="w-14 h-11 px-3 py-1.5 bg-orange-500 rounded-[30px] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">01</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">Cloud-Native Architecture</h3>
                  <p className="text-[#A1A1A1]">
                    Design and implement scalable cloud-native solutions using microservices and containerization.
                  </p>
                </div>
              </div>
              <div className="pb-6 border-b border-gray-700 flex gap-4">
                <div className="w-14 h-11 px-3 py-1.5 bg-orange-500 rounded-[30px] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">02</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">Automation & CI/CD</h3>
                  <p className="text-[#A1A1A1]">
                    Streamline development workflows with automated testing, deployment, and infrastructure provisioning.
                  </p>
                </div>
              </div>
              <div className="pb-6 border-b border-gray-700 flex gap-4">
                <div className="w-14 h-11 px-3 py-1.5 bg-orange-500 rounded-[30px] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">03</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">Monitoring & Observability</h3>
                  <p className="text-[#A1A1A1]">
                    Implement comprehensive monitoring solutions for proactive issue detection and resolution.
                  </p>
                </div>
              </div>
              <div className="pb-6 border-b border-gray-700 flex gap-4">
                <div className="w-14 h-11 px-3 py-1.5 bg-orange-500 rounded-[30px] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">04</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">Security & Compliance</h3>
                  <p className="text-[#A1A1A1]">
                    Integrate security best practices and compliance requirements into every aspect of the infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-xl:h-[604px] xl:w-[604px] relative rounded-3xl self-stretch xl:min-h-full">
            <img className="absolute inset-0 w-full h-full object-cover rounded-[30px]" src={IMAGES.CLOUD_INFRA_5} alt="DevOps Infrastructure" />
            <img className="absolute -left-[70px] border-8 border-[#0D0804] bottom-[70px] w-[450px] h-[320px] object-cover rounded-[30px]" src={IMAGES.MONITORING_1} alt="Monitoring Dashboard" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-12 xl:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1.5 bg-[rgba(238,131,28,0.2)] rounded-full mb-4">
              <span className="text-orange-500 text-sm font-medium">Client Testimonials</span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-semibold mb-4">What Clients Say About My Work</h2>
            <p className="text-[#A1A1A1] max-w-2xl mx-auto">
              Feedback from engineering leaders who've experienced the impact of professional DevOps practices.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 xl:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 rounded-3xl border border-gray-700 bg-transparent flex flex-col items-center text-center gap-4">
                <div className="flex gap-[2px] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon="mdi:star" className="text-[#EAB308] text-[20px]" />
                  ))}
                </div>
                <div className="mb-4">
                  <p className="text-[#A1A1A1] mb-4">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-12 h-12 rounded-3xl object-cover" src={testimonial.avatar} alt={testimonial.author} />
                  <div className="text-left">
                    <div className="text-lg font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-[#A1A1A1]">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="px-12 xl:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1.5 bg-[rgba(238,131,28,0.2)] rounded-full mb-4">
              <span className="text-orange-500 text-sm font-medium">Certifications</span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-semibold mb-4">Professional Certifications</h2>
            <p className="text-[#A1A1A1] max-w-2xl mx-auto">
              Industry-recognized certifications validating expertise in cloud platforms and DevOps practices.
            </p>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-8 rounded-3xl border border-gray-700 bg-transparent flex justify-between items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{cert}</h3>
                </div>
                <div className="p-3 bg-orange-500 rounded-full flex-shrink-0">
                  <Icon icon="ph:certificate" className="text-white text-[20px]" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 xl:px-24 pt-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="pb-8 border-b border-gray-700 flex flex-col items-center gap-12 mb-8">
            <div className="text-4xl font-bold flex items-center">
              <div>DEV</div>
              <div className="text-orange-500 inline-block">O</div>
              <div>PS</div>
            </div>
            <div className="flex flex-col xl:flex-row justify-center items-start gap-12">
              <div className="text-left">
                <div className="text-[#A1A1A1] mb-2 text-center">Email Address</div>
                <div className="text-2xl font-semibold">devops@portfolio.com</div>
              </div>
              <div className="text-left">
                <div className="text-[#A1A1A1] mb-2 text-center">Phone Number</div>
                <div className="text-2xl font-semibold">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="cursor-pointer text-white hover:text-orange-500 transition">About</div>
                <div className="cursor-pointer text-white hover:text-orange-500 transition">Skills</div>
                <div className="cursor-pointer text-white hover:text-orange-500 transition">Projects</div>
                <div className="cursor-pointer text-white hover:text-orange-500 transition">Experience</div>
                <div className="cursor-pointer text-white hover:text-orange-500 transition">Contact</div>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="cursor-pointer text-white hover:text-orange-500 transition">LinkedIn</div>
                <div className="cursor-pointer text-white hover:text-orange-500 transition">GitHub</div>
                <div className="cursor-pointer text-white hover:text-orange-500 transition">Resume</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row justify-between items-center gap-4">
            <div className="text-[#FFF] text-left">Copyright © 2025 DevOps Portfolio, All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
