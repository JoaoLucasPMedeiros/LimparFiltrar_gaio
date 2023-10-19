const filtrar = document.getElementById("filtrar")
const limpar = document.getElementById("limpar")


/* CRIANDO EVENTO PARA FILTRAR*/
/*  dispatchEven É O EVENTO QUE CONECTA O FORM */
/* formId É ID QUE O GAIO INFORMARÁ */
filtrar.addEventListener("click", ()=>{
   dispatchEvent({
    formId:'nENToL'
   })
})


/* 1 - VAI CHAMAR O DASH  */
/* 2 - formFlow VAI RODAR UM PROCESSO  */
/* 3 - FormType VAI INFORMAR O TIPO DE FORMULARIO - POR PADRÃO SERÁ OPENFLOWN  */
/* 4 - FORMRELOAD VAI INFORMAR PRA CARREFAR A PAGINA  */
/* 5 - PARMS (ARRAY) - VAI RECEVER O NOME DO PARAMENTRO DO GAIO  E O VALOR DO PARAMETRO*/
limpar.addEventListener("click", ()=>{
    dispatchEvent({
        FormFlow: CBFuED,
        FormType: 'openFlow', 
        FormReload: true,
        parms:[{paramName:'ZONAS', paramValue:'all_'}]
    })
    
})

    