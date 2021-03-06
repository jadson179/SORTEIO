import React, { useEffect, useState } from "react";
import api, { URL } from "../../../services/api";
import {
  IDraw_QuotasVO,
  IDraw,
  IImage,
  IParticipants_Draw,
} from "../../../types";
import TimerCounter from "../../../global/Timer";
import ReactMarkdown from "react-markdown";
import {
  Container,
  Header,
  Title,
  Subtitle,
  ContainerRow,
  ContainerSlider,
  ContainerColumn,
  ContainerInfoRow,
  Valor,
  ValorTitle,
  DateTitle,
  DateDraw,
  Description,
  Timer,
  CardProcess,
  CardImg,
  ContainerQuotas,
  QuotasHeader,
  ContainerButtonsFilter,
  ButtonsFilter,
  ContinerQuotasShow,
  ButtonQuota,
  ContainerConfirmation,
  ButtonConfirmation,
  ContainerRowInfo,
  ImageSlider
} from "./styles";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function MoadalDraw() {
  const [quotasDraw, setQuotasDraw] = useState<IDraw_QuotasVO[]>([]);
  const [quotasVerifyDraw, setQuotasVerifyDraw] = useState<any>([]);
  const [participants, setParticipants] = useState<IParticipants_Draw[]>([]);
  const [draw, setDraw] = useState<IDraw>();
  const [images, setImages] = React.useState<IImage[]>([]);
  const [draw_id, setDraw_Id] = useState<number>();
  const [day, setDay] = useState<string>();
  const [month, setMonth] = useState<string>();
  const [year, setYear] = useState<string>();
  const [minutes, setMinutes] = useState<string>();
  const [showTime, setShowTime] = useState<string>();
  const [quotasSelected, setQuotasSelected] = useState<string[]>([]);
  const [seconds, setSeconds] = useState(0);
  const [free, setFree] = useState(true);
  const [resevation, setResevation] = useState(true);
  const [sold, setSold] = useState(true);

  useEffect(() => {
    async function getDraw_Quotas() {
      const { data } = await api.get("/draw_quotas");
      setQuotasDraw(data);
    }
    getDraw_Quotas();
  }, []);

  useEffect(() => {
    async function getParticipants() {
      const { data } = await api.get(
        `/join_participants_draws_quotas?draw_id=${sessionStorage.getItem(
          "draw_id"
        )}`
      );

      setParticipants(data[0]);
    }
    getParticipants();
  }, []);
  useEffect(() => {
    const dateNew: any = new Date(`${draw?.date_draw}`);
    const dateResult = TimerCounter(dateNew);
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
      console.log(dateResult)
      if (
        Math.sign(dateResult.days) === -1 &&
        Math.sign(dateResult.hours) === -1 &&
        Math.sign(dateResult.minutes) === -1
      ) {
        setShowTime(`Encerrado`);
      } else if (
        Math.sign(dateResult.days) === -1 &&
        Math.sign(dateResult.hours) === 0 &&
        Math.sign(dateResult.minutes) === -1
      ) {
        setShowTime(`Encerrado`);
      } else if (
        Math.sign(dateResult.days) === -1 &&
        Math.sign(dateResult.hours) === -1 &&
        Math.sign(dateResult.minutes) === 0
      ) {
        setShowTime(`Encerrado`);
      } else if (
        Math.sign(dateResult.days) === 0 &&
        Math.sign(dateResult.hours) === -1 &&
        Math.sign(dateResult.minutes) === -1
      ) {
        setShowTime(`Encerrado`);
      }else if (
        Math.sign(dateResult.days) === 0 &&
        Math.sign(dateResult.hours) === 0 &&
        Math.sign(dateResult.minutes) === -1
      ) {
        setShowTime(`Encerrado`);
      } else {
        setShowTime(
          `Dias: ${dateResult.days} Horas: ${dateResult.hours} Minutos: ${dateResult.minutes}`
        );
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    async function getDraws() {
      const { data } = await api.get(
        `/draw/${sessionStorage.getItem("draw_id")}`
      );

      const id: any = sessionStorage.getItem("draw_id");
      setDraw_Id(parseInt(id));
      setDraw(data[0]);

      const date = new Date(data[0].date_draw);
      const months = [
        `01`,
        `02`,
        `03`,
        `04`,
        `05`,
        `06`,
        `07`,
        `08`,
        `09`,
        `10`,
        `11`,
        `12`,
      ];
      setDay(`${date.getUTCDate()}`);
      setMonth(`${months[date.getMonth()]}`);
      setYear(`${date.getUTCFullYear()}`);
      setMinutes(`${date.getMinutes()}`);
    }
    getDraws();
  }, []);

  useEffect(() => {
    async function getImages() {
      const { data } = await api.get("/images");

      setImages(data);
    }
    getImages();
  }, []);

  useEffect(() => {
    function renderQuotas() {
      const render = quotasDraw.map((quota_draw) => {
        let response;

        if (participants.length === 0) {
          response = {
            status: "free",
            number: quota_draw.number,
            draw_quota_id: quota_draw.draw_quota_id,
            draw_id,
          };
        } else {
          participants.map((participant_item) => {
            if (participant_item.draw_quota_id === quota_draw.draw_quota_id) {
              response = { ...participant_item };
            }
          });
        }
        if (response === undefined) {
          response = {
            status: "free",
            number: quota_draw.number,
            draw_quota_id: quota_draw.draw_quota_id,
            draw_id,
          };
        }
        return response;
      });

      setQuotasVerifyDraw(render);
    }
    renderQuotas();
  }, [quotasDraw, participants]);
  const handleSetQuotasSelected = (number: string, status: string) => {
    if (status === "free") {
      const verify = quotasSelected.filter((quota) => quota === number);

      if (verify.length === 0) {
        setQuotasSelected([...quotasSelected, number]);
      }
      console.log(quotasSelected);
    }
  };

  const handleSetQuotasExcludeSelected = (number: string) => {
    const verify = quotasSelected.filter((quota) => quota != number);
    setQuotasSelected(verify);
  };

  async function sendApi() {
    if (quotasSelected.length > 0) {
      const dataUser: any = sessionStorage.getItem("data");

      quotasSelected.map(async (item) => {
        const payload = {
          users_user_id: JSON.parse(dataUser).user_id,
          draw_quotas_draw_quota_id: parseInt(
            `${
              quotasDraw.find((quota) => quota.number === item)?.draw_quota_id
            }`
          ),
          draws_draw_id: draw_id,
        };

        const { data } = await api.post("/participant_draw", payload);
        console.log(data);
      });
    }
  }

  const handeHandleQuotasFree = () => {
    const display = free === true ? "block" : "none";
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
      ".gray"
    );
    buttons.forEach((element) => {
      element.style.display = display;
    });
    setFree(!free);
  };

  const handeHandleQuotasResevation = () => {
    const display = resevation === true ? "block" : "none";
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
      ".blue"
    );
    buttons.forEach((element) => {
      element.style.display = display;
    });
    setResevation(!resevation);
  };
  const handeHandleQuotasGreen = () => {
    const display = sold === true ? "block" : "none";
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
      ".green"
    );
    buttons.forEach((element) => {
      element.style.display = display;
    });
    setSold(!sold);
  };
  return (
    <Container>
      <Header>
        <Title>{draw?.title}</Title>
        <Subtitle>{draw?.subtitle}</Subtitle>
      </Header>
      <ContainerRow>
        <ContainerSlider>
          {images.map((image, index) =>
            image.draws_draw_id == draw_id ? (
              <ImageSlider
                src={image.data_image}
              />
            ) : (
              <></>
            )
          )}
        </ContainerSlider>
        <ContainerColumn>
          <ContainerInfoRow>
            <Valor>
              <ValorTitle>Valor</ValorTitle>
              <p style={{ margin: 0 }}>R$ {draw?.value}</p>
            </Valor>
            <DateDraw>
              <DateTitle>Sorteio</DateTitle>
              <p style={{ margin: 0 }}>
                {day}/{month}/{year}
              </p>
            </DateDraw>
          </ContainerInfoRow>
          <Description>
            {" "}
            <ReactMarkdown source={draw?.description} escapeHtml={true} />
          </Description>
          <Timer>
            <p>{showTime}</p>
          </Timer>
        </ContainerColumn>
      </ContainerRow>
      <ContainerRowInfo style={{ justifyContent: "center" }}>
        <CardProcess>
          <CardImg src={`${URL}/passo-1.png`} />
          <Subtitle>Escolha uma Rifa</Subtitle>
          <p style={{ width: "60%" }}>
            Muito fácil participar. Comece escolhendo uma Rifa ativa.
          </p>
        </CardProcess>
        <CardProcess>
          <CardImg src={`${URL}/passo-2.png`} />
          <Subtitle>Selecione os números</Subtitle>
          <p style={{ width: "60%" }}>
            Escolha quantos quiser! Quanto mais, mais chances de ganhar.
          </p>
        </CardProcess>
        <CardProcess>
          <CardImg src={`${URL}/passo-3.png`} />
          <Subtitle>Faça o pagamento</Subtitle>
          <p style={{ width: "60%" }}>
            Escolha uma das formas de pagamento disponíveis.
          </p>
        </CardProcess>
        <CardProcess>
          <CardImg src={`${URL}/passo-4.png`} />
          <Subtitle>Aguarde o sorteio</Subtitle>
          <p style={{ width: "60%" }}>
            Agora é aguardar o sorteio pela Loteria Federal e boa sorte!
          </p>
        </CardProcess>
      </ContainerRowInfo>
      <ContainerQuotas>
        <QuotasHeader>
          <h1>Cotas</h1>
          <Subtitle>Clique e selecione quantas cotas você quiser!</Subtitle>
        </QuotasHeader>
        <ContainerButtonsFilter>
          <div>
            <ButtonsFilter color={"gray"} onClick={handeHandleQuotasFree}>
              Livre
            </ButtonsFilter>
            <ButtonsFilter color={"blue"} onClick={handeHandleQuotasResevation}>
              Reservados
            </ButtonsFilter>
            <ButtonsFilter color={"green"} onClick={handeHandleQuotasGreen}>
              Pagos
            </ButtonsFilter>
          </div>
        </ContainerButtonsFilter>
        <ContinerQuotasShow>
          {quotasVerifyDraw.map((quota) => {
            let colorValue = "green";
            if (quota?.status === "resevation") {
              colorValue = "blue";
            } else if (quota?.status === "sold") {
              colorValue = "green";
            } else if (quota?.status === "free") {
              colorValue = "gray";
            }
            return (
              <ButtonQuota
                className={colorValue}
                onClick={() =>
                  handleSetQuotasSelected(quota?.number, quota?.status)
                }
                color={colorValue}
              >
                {quota?.number}
              </ButtonQuota>
            );
          })}
        </ContinerQuotasShow>
      </ContainerQuotas>
      <ContainerConfirmation length={quotasSelected.length}>
        <div style={{ width: "400px" }}>
          {quotasSelected.map((quota) => (
            <ButtonQuota
              color={"blue"}
              onClick={() => handleSetQuotasExcludeSelected(quota)}
            >
              {quota}
            </ButtonQuota>
          ))}
        </div>
        <div>
          <p>
            {quotasSelected.length}x {draw?.value} = R${" "}
            {quotasSelected.length * parseInt(`${draw?.value}`)}{" "}
          </p>
          <ButtonConfirmation onClick={sendApi}>Finalizar</ButtonConfirmation>
        </div>
      </ContainerConfirmation>
    </Container>
  );
}
