import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [
    {id: 1,
    label: 'Formation Drupal',
    image:`https://picsum.photos/200/300/?image=1`,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, praesentium",
    price: 34.998,
    date: new Date(),
    votes:{
      like: 11,
      dislike: 14

    },
    fav: false
    
  },

  {id: 2,
    label: 'Formation Php',
    image:`https://picsum.photos/200/300/?image=2`,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, praesentium",
    price: 86.957,
    date: new Date(),
    votes:{
      like: 14,
      dislike: 115656

    },
    fav: false
  },

  {id: 3,
    label: 'Formation Angular',
    image:`https://picsum.photos/200/300/?image=3`,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, praesentium",
    price: 102.333,
    date: new Date(),

    votes:{
      like: 7,
      dislike: 1006

    },
    fav: false
  },

  {id: 4,
    label: 'Formation Symfony',
    image:`https://picsum.photos/200/300/?image=4`,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, praesentium",
    price: 334.998,
    date: new Date(),
    votes:{
      like: 9856,
      dislike: 14

    },
    fav: false
  },

  {id: 5,
    label: 'Formation Angular',
    image:`https://picsum.photos/200/300/?image=5`,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, praesentium",
    price: 854.587,
    date: new Date(),

    votes:{
      like: 5656,
      dislike: 87

    },
    fav: false
  },

  ]

  constructor() { }

  ngOnInit() {
  }

  favorit(course) {
    course.fav = !course.fav;
  }

  setVoteInCourse(data, course){
    if(data.status === 'like') {
      course.votes.like = data.value
    } else {
      course.votes.dislike = data.value
    }
  }

}
