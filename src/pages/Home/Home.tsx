import { useState , useEffect } from 'react'
import './style.css'
import { Card , CardProps } from '../../components/Card'

export function Home() {

  // type Student = {
  //   name: string;
  //   time: string;
  //   date: string;
  // }

  // type ArrayStudents = CardProps[]

  // type User = {
  //   name: string;
  //   avatar_url: string;
  // }

  type GitUsersAPIResponse = {
    
    login?: string;
    id?: number;
    node_id?: string;
    avatar_url: string;
    gravatar_id?: string;
    url?: string;
    html_url?: string;
    followers_url?: string;
    following_url?: string;
    gists_url?: string;
    starred_url?: string;
    subscriptions_url?: string;
    organizations_url?: string;
    repos_url?:  string;
    events_url?: string;
    received_events_url?: string;
    type?: string;
    site_admin?: boolean;
    name: string;
    company?: string | null;
    blog?: string;
    location?: string | null;
    email?: string | null;
    hireable?: string | null;
    bio?: string;
    twitter_username?: string | null;
    public_repos?: number;
    public_gists?: number;
    followers?: number;
    following?: number;
    created_at?: string;
    updated_at?: string;
  }

  const [studentName, setStudentName] = useState<string>("");
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<GitUsersAPIResponse>({} as GitUsersAPIResponse);

  function resetPlaceholder() {
    const input: HTMLElement | null = document.getElementById('input_name');
    input.value = "";
  }

  function addStudent(): void {
    const newStudent: CardProps = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br" , {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      date: new Date().toLocaleDateString("pt-br" , {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      }) 
    };
     setStudents((prevState) => [...prevState, newStudent]);
     resetPlaceholder();
  }
  
  useEffect(() => {
    async function fetchData(url: string){
    const res = await fetch(url);
    const data: GitUsersAPIResponse = await res.json();

    setUser({
      name: data.name, 
      avatar_url: data.avatar_url})
    }

    fetchData("https://api.github.com/users/rolfhelder").catch(e => console.error(e))
  }, [])

  return (
    <div className='container'>
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar_url} alt="Profile pic" />
        </div>
      </header>
      

      <input 
        type="text" 
        name="Name" 
        id="input_name" 
        placeholder="Digite o nome"
        onChange={e => setStudentName(e.target.value)}
      />
      
      <button type="button" onClick={addStudent}>
        Adicionar
      </button>
      
      {
        students.map((student: CardProps) => (
        <Card
        key={student.time} 
        name={student.name} 
        time={student.time} 
        date={student.date}/>))
      }
      
    </div>
  )
}

