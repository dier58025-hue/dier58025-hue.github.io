/*
  只改这个文件，就可以更新网站内容。
  注意：
  1. 引号、逗号、冒号不要删。
  2. 图片放在 assets/images/ 里面，再把路径写到 image 字段。
  3. PDF 放在 assets/pdf/portfolio.pdf，或修改 portfolioPdf 的路径。
  4. 不确定格式时，把这个文件发给 AI，让 AI 按原结构帮你改。
*/

window.SITE = {
  nameZh: "李小艺",
  nameEn: "Xiaoyi Li",
  roleZh: "视觉艺术创作者 / 艺术研究者",
  roleEn: "Visual Artist / Researcher",
  email: "hello@example.com",
  portfolioPdf: "assets/pdf/portfolio.pdf",

  bioZh: "李小艺的创作围绕图像、身体、空间与档案展开，关注个人经验如何被媒介、展陈和记忆机制重新组织。此网站用于集中展示代表作品、研究方向、履历和申请材料。",
  bioEn: "Xiaoyi Li's practice explores image, body, space and archive, focusing on how personal experience is reorganized through media, exhibition and memory. This website presents selected works, research interests, CV and application materials.",

  statementShortZh: "我的创作关注图像如何进入身体经验、空间结构与档案叙事，并在展陈现场形成新的观看关系。",
  statementShortEn: "My practice examines how images enter bodily experience, spatial structures and archival narratives, forming new relations of viewing within exhibition contexts.",

  directionZh: "视觉艺术、影像装置、档案实践、身体经验、空间叙事、艺术理论。",
  directionEn: "Visual art, moving-image installation, archival practice, embodied experience, spatial narrative and art theory.",

  researchZh: "这里替换为正式的创作/研究陈述。建议包含：第一，当前创作关心的问题；第二，主要媒介和方法；第三，与艺术史、理论或社会议题的关系；第四，博士阶段想继续研究的问题。文字不宜太空泛，要尽量和具体作品形成对应。",
  researchEn: "Replace this paragraph with the formal artist/research statement. It may include: the central questions of the practice, the primary media and methods, its relation to art history/theory/social issues, and the research questions to be pursued during doctoral study. Avoid overly abstract language; connect the statement to specific works.",

  keywords: ["Image", "Archive", "Body", "Installation", "Memory", "Space"],

  socials: [
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "Behance", url: "https://behance.net/" },
    { label: "PDF Portfolio", url: "assets/pdf/portfolio.pdf" }
  ],

  works: [
    {
      titleZh: "未命名的房间",
      titleEn: "Untitled Room",
      year: "2026",
      mediumZh: "影像装置，单频录像，12 分钟",
      mediumEn: "Video installation, single-channel video, 12 min",
      image: "assets/images/work-01.svg",
      descriptionZh: "作品以一间反复出现的房间为线索，讨论私人记忆如何在影像、声音和空间布置中被重新构造。",
      descriptionEn: "The work follows a recurring room to examine how private memory is reconstructed through image, sound and spatial arrangement."
    },
    {
      titleZh: "档案的表面",
      titleEn: "Surface of the Archive",
      year: "2025",
      mediumZh: "摄影、文本、混合材料",
      mediumEn: "Photography, text and mixed media",
      image: "assets/images/work-02.svg",
      descriptionZh: "项目将家庭照片、手写记录和材料痕迹并置，关注档案并非客观容器，而是一种持续被编辑的叙事结构。",
      descriptionEn: "The project juxtaposes family photographs, handwritten records and material traces, treating the archive as an edited narrative structure rather than a neutral container."
    },
    {
      titleZh: "身体测量",
      titleEn: "Measuring the Body",
      year: "2024",
      mediumZh: "行为、装置、图像记录",
      mediumEn: "Performance, installation and image documentation",
      image: "assets/images/work-03.svg",
      descriptionZh: "作品通过重复性的身体动作和测量工具，讨论制度化尺度如何进入身体感知。",
      descriptionEn: "Through repeated bodily actions and measuring devices, the work considers how institutional scales enter bodily perception."
    },
    {
      titleZh: "临时纪念碑",
      titleEn: "Temporary Monument",
      year: "2023",
      mediumZh: "场域装置、声音、文本",
      mediumEn: "Site-specific installation, sound and text",
      image: "assets/images/work-04.svg",
      descriptionZh: "项目以临时性材料建构一个不稳定的纪念结构，回应公共记忆、地点和个体叙述之间的关系。",
      descriptionEn: "The project constructs an unstable memorial structure with temporary materials, responding to public memory, place and individual narratives."
    }
  ],

  cvSections: [
    {
      titleZh: "教育经历",
      titleEn: "Education",
      items: [
        "2024–至今  某某大学，艺术学硕士",
        "2020–2024  某某美术学院，视觉艺术学士"
      ]
    },
    {
      titleZh: "展览经历",
      titleEn: "Exhibitions",
      items: [
        "2026  《未命名的房间》，某某空间，上海",
        "2025  《档案的表面》，青年艺术项目，北京",
        "2024  某某毕业展，某某美术馆，杭州"
      ]
    },
    {
      titleZh: "发表 / 项目",
      titleEn: "Publications / Projects",
      items: [
        "2026  论文或项目名称，《期刊/平台名称》",
        "2025  工作坊 / 驻留 / 研究项目名称"
      ]
    },
    {
      titleZh: "获奖",
      titleEn: "Awards",
      items: [
        "2025  某某奖学金 / 青年艺术奖",
        "2024  优秀毕业作品"
      ]
    }
  ]
};
