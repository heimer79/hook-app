

export const PokemonCard = ( { id, name, sprites = [] } ) => {
  return (
    
    <section style={{ height: 200 }}>

        <h2 className="text-capitalize">#{id} - {name}</h2>

        <div>
            {
                sprites.map((sprite, index) => (
                    <img key={index} src={sprite} alt={name} style={{ width: 150, height: 150 }} />
                ))
            }
        </div>

    </section>
  )
}
