import AdminHeader from "./components/admin/header";

const Admin = () => (
    <div className="wrapper">
        <AdminHeader />
        <h1>컨텐츠 등록</h1>
        <form action="/api/content" method="POST" encType="multipart/form-data">
            <input type="text" name="title" />
            <input type="text" name="preview" />
            <input type="text" name="directLink" />
            <input type="file" name="thumbnail" />
            <input type="submit" />
        </form>
    </div>    
)


export default Admin;