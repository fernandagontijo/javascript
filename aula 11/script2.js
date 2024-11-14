// Atividade 02
 //Dada a seguinte lista de objetos JSON que representam estudantes, adicione um novo estudante, remova o estudante com um determinado
 //ID e atualize as notas de todos os estudantes em uma determinada disciplina.

 const estudantes = [
    {
      id: 1,
      nome: "Ana",
      disciplinas: {
        matematica: 7.5,
        portugues: 8.0
      }
    },
    {
      id: 2,
      nome: "Carlos",
      disciplinas: {
        matematica: 6.0,
        portugues: 7.5
      }
    },
    {
      id: 3,
      nome: "Beatriz",
      disciplinas: {
        matematica: 8.5,
        portugues: 9.0
      }
    }
  ];

  function adicionarEstudante(novoEstudante) {
    estudantes.push(novoEstudante);
    console.log("Estudante adicionado:", novoEstudante);
  }
  