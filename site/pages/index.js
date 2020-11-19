import Head from 'next/head'
import {
  Container,
  Jumbotron,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap'

function Home() {
  return (
    <>
      <Head>
        <title>Home - DeCExclusiveStore</title>
        <meta name="descripton" content="Site de Semi Joias" />
        <meta name="author" content="DeCSoftwares" />
      </Head>

      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
                   text-align: right;
                   margin-botton: 0rem !important
                   height: 5px;
                }`}
        </style>
        <Container>(11)95915-7914 decexclusivestore@gmail.com</Container>
      </Jumbotron>

      <Jumbotron fluid className="fundo">
        <style>
          {`.fundo{
                background-color: #FFF8FD;
                   text-align: center;
                   margin-botton: 0rem !important                
                }`}
        </style>
        <Container>
          <div className="row">
            <Card className="col-md-3">
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
            <Card className="col-md-3">
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
            <Card className="col-md-3">
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
            <Card className="col-md-3">
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </div>
        </Container>
      </Jumbotron>
    </>
  )
}

export default Home
