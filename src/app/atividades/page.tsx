import CardAtividades from "@/components/CardAtividades"
import Cabecalho from "../shared/Cabecalho"
import TitleSections from "../shared/TitleSections"
import Img_Musicoterapia from 'public/assets/atividades/musicoterapia.png'
import Img_nutricionista from 'public/assets/atividades/nutricionista.png'
import Img_to from 'public/assets/atividades/to.png'
import Img_fisioterapia from 'public/assets/atividades/fisioterapia.png'
import Img_arteTerapia from 'public/assets/atividades/arteTerapia.png'
import Img_jogos from 'public/assets/atividades/jogos.png'
import Img_diaBeleza from 'public/assets/atividades/diaBeleza.png'
import Img_hidroginastica from 'public/assets/atividades/hidroginastica.png'
import Img_hortoterapia from 'public/assets/atividades/hortoterapia.png'
import Rodape from "@/components/Rodape"
import Whatsapp from "../shared/Whatsapp"


const Atividades = () => {
  return (
    <div className="flex flex-col h-full min-h-screen bg-vivencie relative">
        <Cabecalho className="bg-vivencie shadow-md"/>
        <div className="flex flex-col mt-40 px-8 md:px-16 xl:px-40">

        <TitleSections title="Muita interação para deixar o dia mais alegre"/>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-8 gap-6">
          <CardAtividades titulo="Musicoterapia" imagem={Img_Musicoterapia} alt="Íconde de musicoterapia"/>
          <CardAtividades titulo="Hortoterapia" imagem={Img_hortoterapia} alt="Hortoterapia"/>
          <CardAtividades titulo="Hidroginastica" imagem={Img_hidroginastica} alt="Hidroginástica"/>
          <CardAtividades titulo="Jogos" imagem={Img_jogos} alt="Jogos"/>
          <CardAtividades titulo="Dia da Beleza" imagem={Img_diaBeleza} alt="Dia da Beleza"/>
          <CardAtividades titulo="Arte Terapia" imagem={Img_arteTerapia} alt="Arte terapia"/>
          <CardAtividades titulo="Fisioterapia" imagem={Img_fisioterapia} alt="Fisioterapia"/>
          <CardAtividades titulo="T.O." imagem={Img_to} alt="Terapia Ocupacional"/>
          <CardAtividades titulo="Nutricionista" imagem={Img_nutricionista} alt="Íconde de musicoterapia"/>
        </div>
        </div>
        <div className=" flex-1"></div>
        <Whatsapp className=" fixed right-8 bottom-16 drop-shadow-md"/>
        <Rodape/>
    </div>
  )
}

export default Atividades