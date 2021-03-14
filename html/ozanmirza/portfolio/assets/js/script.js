class Semester {
  constructor(select, projects) {
    this.index = select
    this.title = "Semester " + select;
    this.projects = projects;
  }
}

class Project {
  constructor(index, name, description, image, location) {
    this.index = index;
    this.name = name;
    this.description = description;
    this.image = image;
    this.location = location;
  }
}

const scaffold = [
  new Semester(
    1,
    [
      new Project(
        1,
        "APW Homepage",
        "The APW class website. I tried to improve its functionality and overall design.",
        "class-site.png",
        "class-site.html",
      ),
      new Project(
        2,
        "Dr. Foodie",
        "This is an app that uses AI where the user can see the nutrition within their food.",
        "dr--foodie.png",
        "dr--foodie.html",
      ),
      new Project(
        3,
        "Aries Sciences LLC Updates",
        "There are around 8 or 9 apps published under this name that I tried to update.",
        "aries-sciences-llc.png",
        "aries-sciences-llc.html",
      ),
    ],
  ),
  new Semester(
    2,
    [
      new Project(
        1,
        "Coursera College Courses",
        "Almost like brilliant.org but in a different way, I will be expanding my education through the resources that this service offers.",
        "coursera.png",
        "coursera.html",
      ),
      new Project(
        2,
        "Cooper Hewitt Design Competition",
        "The Cooper Hewitt hosts an annual national design competition and I submitted Dr. Foodie to it.",
        "cw-competition.png",
        "cooper-hewitt-competition.html",
      ),
      new Project(
        3,
        "UPCOMING",
        "Let's see what else will happen this semester.",
        "upcoming2.png",
        "",
      ),
    ],
  ),
];

window.onload = () => {
  scaffold.forEach((_section) => {
    let section = document.createElement("div");
    section.classList.add("work");

    let title = document.createElement("h2");
    title.innerHTML = _section.title;
    section.appendChild(title);

    let container = document.createElement("div");
    container.classList.add("work--lockup");

    let slider = document.createElement("ul");
    slider.classList.add("slider");
    slider.id = "slider-" + _section.index;

    _section.projects.forEach((_project) => {
      let project = document.createElement("li");
      project.classList.add("slider--item", "slider--item-" + ["left", "center", "right"][_project.index - 1]);

      let link = document.createElement("a");
      link.href = "assets/prj/" + _project.location;
      link.target = "_blank";

      let item = document.createElement("div");
      item.classList.add("slider--item-image");

      let image = document.createElement("img");
      image.src = "assets/img/" + _project.image;

      let header = document.createElement("p");
      header.classList.add("slider--item-title");
      header.innerHTML = _project.name;

      let description = document.createElement("p");
      description.classList.add("slider--item-description");
      description.innerHTML = _project.description;

      item.appendChild(image);
      link.appendChild(item);
      link.appendChild(header);
      link.appendChild(description)
      project.appendChild(link);
      slider.appendChild(project);
    });

    container.appendChild(slider);
    section.appendChild(container);

    section.children[1].innerHTML += `
    <div class="slider--prev">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
      <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
        <path d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
        c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
        c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z"/>
      </g>
      </svg>
    </div>
    <div class="slider--next">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
      <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
        <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
      </g>
      </svg>
    </div>
    `;

    document.getElementById("works-" + _section.index).appendChild(section);

    $('.slider--prev, .slider--next').click(function() {

      var $this = $(this),
          $slider = $('#slider-' + _section.index),
          curLeft = $slider.find('.slider--item-left'),
          curLeftPos = $slider.children().index(curLeft),
          curCenter = $slider.find('.slider--item-center'),
          curCenterPos = $slider.children().index(curCenter),
          curRight = $slider.find('.slider--item-right'),
          curRightPos = $slider.children().index(curRight),
          totalWorks = $slider.children().length,
          $left = $slider.find('.slider--item-left'),
          $center = $slider.find('.slider--item-center'),
          $right = $slider.find('.slider--item-right'),
          $item = $slider.find('.slider--item');

      $('.slider').animate({ opacity : 0 }, 400);

      setTimeout(function(){

      if ($this.hasClass('slider--next')) {
        if (curLeftPos < totalWorks - 1 && curCenterPos < totalWorks - 1 && curRightPos < totalWorks - 1) {
          $left.removeClass('slider--item-left').next().addClass('slider--item-left');
          $center.removeClass('slider--item-center').next().addClass('slider--item-center');
          $right.removeClass('slider--item-right').next().addClass('slider--item-right');
        }
        else {
          if (curLeftPos === totalWorks - 1) {
            $item.removeClass('slider--item-left').first().addClass('slider--item-left');
            $center.removeClass('slider--item-center').next().addClass('slider--item-center');
            $right.removeClass('slider--item-right').next().addClass('slider--item-right');
          }
          else if (curCenterPos === totalWorks - 1) {
            $left.removeClass('slider--item-left').next().addClass('slider--item-left');
            $item.removeClass('slider--item-center').first().addClass('slider--item-center');
            $right.removeClass('slider--item-right').next().addClass('slider--item-right');
          }
          else {
            $left.removeClass('slider--item-left').next().addClass('slider--item-left');
            $center.removeClass('slider--item-center').next().addClass('slider--item-center');
            $item.removeClass('slider--item-right').first().addClass('slider--item-right');
          }
        }
      }
      else {
        if (curLeftPos !== 0 && curCenterPos !== 0 && curRightPos !== 0) {
          $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
          $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
          $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
        }
        else {
          if (curLeftPos === 0) {
            $item.removeClass('slider--item-left').last().addClass('slider--item-left');
            $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
            $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
          }
          else if (curCenterPos === 0) {
            $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
            $item.removeClass('slider--item-center').last().addClass('slider--item-center');
            $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
          }
          else {
            $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
            $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
            $item.removeClass('slider--item-right').last().addClass('slider--item-right');
          }
        }
      }

    }, 400);

    $('.slider').animate({ opacity : 1 }, 400);

    });
  });
}

let autoScroll = () => {
  const currentSemester = "2";
  const section = "section--is-active";
  const nav = "is-active";
  document.getElementById("about").classList.remove(section);
  document.getElementById("works-" + currentSemester).classList.add(section);
  document.getElementById("about-nav").classList.remove(nav);
  document.getElementById("works-" + currentSemester + "-nav").classList.add(nav);
  document.getElementById("about-side-nav").classList.remove(nav);
  document.getElementById("works-" + currentSemester + "-side-nav").classList.add(nav);
}
