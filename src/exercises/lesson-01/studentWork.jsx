//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Elias';
  const age = '39';
  const hobbies = [
    'Spending time with family',
    'Doing community service',
    'Playing Videogames',
    'Coding',
  ];
  return (
    <div>
      <h1>
        My name is {name} and I am {age} years old.
      </h1>
      <p>
        I am currently enrolled in the Web Developer Pathway at Code the Dream.
        I have a strong interest in technology, ranging from physical systems
        such as electrical controls and industrial automation to software
        development and programming. I also enjoy learning about related fields,
        including cybersecurity, networking, and IT. Above all, I enjoy using my
        skills to help, support, and encourage others.
      </p>

      <h2>Some of my hobbies include:</h2>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
