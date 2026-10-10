import React,{Suspense,lazy} from 'react';
import {Routes,Route,Navigate,useLocation,Link} from 'react-router-dom';
import routes from './data/routes.json';
import {PageProvider} from './components/PageContext';
import Layout from './components/Layout';
import LocalRecordPage from './pages/LocalRecordPage';

const imports=import.meta.glob(['./pages/**/*.jsx','!./pages/LocalRecordPage.jsx']);
const pages=Object.fromEntries(routes.filter(r=>!r.empty).map(r=>[r.path,lazy(imports['./'+r.file.replace('src/','')])]));
const Login=pages['/login0bfe'];
const emptyRedirects={'/general/bulk-upload':'/general/bult-upload/bulkmember_upload2','/engagement/old/diet/diet_plan':'/engagement/manage_diet','/engagement/viewassign_workout_plan':'/engagement/assign_exercise_web','/membership/upgrade/upgrademembership_plan':'/membership/upgrade/add_group_x_upgrade_membership'};
class ErrorBoundary extends React.Component {
  state={error:null};
  static getDerivedStateFromError(error){return {error};}
  render(){return this.state.error?<div className="container"><h1>Unable to open this page</h1><p>{this.state.error.message}</p><button className="btn btn-primary" onClick={()=>location.reload()}>Reload</button></div>:this.props.children;}
}
function RouteView(){
  const location=useLocation(),route=location.pathname==='/login'?{shell:false,title:'HGMS Login'}:routes.find(r=>r.path===location.pathname)||{shell:true,title:'HGMS'};
  return <Layout route={route}><ErrorBoundary key={location.pathname}><Suspense fallback={<div className="hgms-loading" role="status">Loading…</div>}><Routes><Route path="/" element={<Navigate to="/login" replace/>}/><Route path="/login" element={<Login/>}/>{routes.map(r=>{const Page=pages[r.path];return <Route key={r.path} path={r.path} element={Page?<Page/>:<Navigate to={emptyRedirects[r.path]} replace/>}/>;})}<Route path="/local/:name" element={<LocalRecordPage/>}/><Route path="*" element={<div className="container"><h1>Page not found</h1><Link to="/home">Home</Link></div>}/></Routes></Suspense></ErrorBoundary></Layout>;
}
export default function App(){return <PageProvider><RouteView/></PageProvider>;}
