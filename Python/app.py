import os


def processar_resposta(resposta, nome):
    if resposta == '1':
        print(f'{os.linesep}{nome} O mercado de trabalho para estes profissionais de tecnologia e marketing digital,está cada vez mais aquecido. Com a aceleração da transformação digital há ainda mais oportunidades, pois estes profissionais são requisitados por negócios de todos os tamanhos.{os.linesep}')
    elif resposta == '2':
        print(f'{os.linesep}{nome} Em média demora de 10meses à 2 anos, porém varia muito de um desenvolvedor para outro, da sua dedicaçao, do quanto aprendeu e aplicou os conhecimentos adquiridos. {os.linesep}')
    elif resposta == '3':
        print(f'{os.linesep}{nome} Eu indico o canal do Matheus - canal Jstack, Rocketseat, Dio santander, Sujeito programador, OneBitCode - que por sinal tem um curso de javascript totalmente gratuito e ensina muito bem a base.{os.linesep}')
    else:
        print('Digite apenas 1,2 ou 3')


def start():

    # Apresentar o chatbot
    print('Olá! Bem vindo ao Silvocasdevjunior')
    # pedir o nome
    nome = input('Digite seu nome: ')
    # pedir o e-mail
    email = input('Digite seu e-mail: ')
    while True:
        # oferecer o menu de opções
        resposta = input(
            f'O que gostaria de saber?{os.linesep} [1] - Vale a pena se tornar Dev frontend ?{os.linesep} [2] - Quanto tempo leva para conseguir um emprego como dev ?{os.linesep} [3] - Quais sites e canais você me indicaria estudar?{os.linesep}')
        # processar a resposta enviada
        processar_resposta(resposta, nome)


if __name__ == '__main__':
    start()
