import { Navbar,Container,Nav, NavDropdown } from 'react-bootstrap';

export default function TopNavbar({ navbarContent,dropdown }){
  return(
    <>
      <Navbar bg={`${navbarContent.bg}`} expand="lg" variant={`${navbarContent.variant}`}>
        
  <Container>
    <Navbar.Brand href="#home">
      {navbarContent.brandname}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        {
          navbarContent.items.map((items, label, url)=>{
            return <Nav.Link href={items.url}>{ items.label }</Nav.Link>
          })
        }
        {
          //Insert DropDown
        }
        <NavDropdown title={ dropdown.title } id={ dropdown.id } >
          {
         dropdown.item.map((valor,itemlabel,itemhref )=>{
           return<>
             <NavDropdown.Item href={valor.itemhref}>
               {valor.itemlabel}
             </NavDropdown.Item>
           </>
         })
        }
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
}