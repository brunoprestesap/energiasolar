import React from 'react'

const CtaForm = () => {
  return (
    <div className="w-full bg-[#FFB200] rounded-2xl p-5">
          <h2 className="text-xl font-bold text-white">Solicite uma cotação</h2>

          <form
            action="https://getform.io/f/73cd82b3-0511-4dc0-845b-0c8a5b07ca19"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="grid md:grid-cols-2 gap-2 w-full">
              <div className="flex flex-col">
                <label className="text-sm py-2 text-black font-medium">
                  Nome
                </label>
                <input
                  className="rounded-lg p-1 flex border-[#003E53]-300 focus:ring focus:ring-[#003E53]"
                  type="text"
                  name="name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm py-2 text-black font-medium">
                  Whatsapp
                </label>
                <input
                  className="rounded-lg p-1 flex border-[#003E53]-300 focus:ring focus:ring-[#003E53]"
                  type="text"
                  name="phone"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="text-sm py-2 text-black font-medium">
                Valor da conta de luz
              </label>
              <input
                className="rounded-lg p-1 flex border-[#003E53]-300 focus:ring focus:ring-[#003E53]"
                type="text"
                name="valor"
              />
            </div>
    
            <button className="bg-[#254133] hover:bg-stone-700 text-gray-100 mt-4 w-full p-4 rounded-lg">
              <h2 className="text-lg font-bold">Solicitar cotação</h2>
            </button>
          </form>
        </div>
  )
}

export default CtaForm