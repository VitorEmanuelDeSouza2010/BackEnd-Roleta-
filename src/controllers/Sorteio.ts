// Lista, Cria, Atualiza, Deleta ou pega um aluno pelo Id
import { Request, Response } from "express";

export default {

    create: async (request: Request, response: Response) => {
        try {
            const { lista } = request.body;
            const indiceAleatorio = Math.floor(Math.random() * lista.length);

            return response.status(200).json(lista[indiceAleatorio])
        } catch (e) {
            return response.status(500).json("Algo deu errado, tente novamente mais tarde.");
        };
    },
};