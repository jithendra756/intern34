import CourseCard from '../coursecard/CourseCard';
import style from './courses.module.css'
// import sampleImage from '../../assets/sampleImage.webp';


const Courses = () => {
  const courses = [
    {
      duration: '4 Months',
      title: 'Advanced Security Course',
      presenter: 'Acme',
      description: 'Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data ',
      image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg'
    },
    {
      duration: '6 Months',
      title: 'Advanced Security Course',
      presenter: 'Acme',
      description: 'Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data ',
      image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg'
    },
    {
      duration: '8 Months',
      title: 'Advanced Security Course',
      presenter: 'Acme',
      description: 'Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data ',
      image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg'
    },
    {
      duration: '5 Months',
      title: 'Full Stack Web Development',
      presenter: 'Tech Academy',
      description: 'Master front-end and back-end development with JavaScript, React, Node.js, and more in this intensive course.',
      image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg'
    },
    {
      duration: '3 Months',
      title: 'Machine Learning with Python',
      presenter: 'AI Hub',
      description: 'Learn the fundamentals of machine learning, including supervised and unsupervised techniques using Python.',
      image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg'
    },
    {
      duration: '6 Months',
      title: 'Cloud Computing Essentials',
      presenter: 'Cloud Masters',
      description: 'Understand cloud infrastructure, deployment models, and services with hands-on AWS and Azure projects.',
      image: 'https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg'
    }
  ];

  return (

    <div className={style.ccp}>
      <div className={style.cc}>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
    
  );
};

export default Courses;
