import React from 'react';
import Figure from 'react-bootstrap/Figure';

export default function FigureExample() {
  return (
    <div class="d-flex p-3 justify-content-center">
      <Figure style={{ padding: '20px', margin: '5px' }}>
        <Figure.Image
          width={41}
          height={10}
          alt="171x180"
          src="https://cdn.pixabay.com/photo/2013/07/12/15/40/present-150291__340.png"
        />
        <Figure.Caption>Top Offers</Figure.Caption>
      </Figure>

      <Figure style={{ padding: '20px', margin: '5px' }}>
        <Figure.Image
          width={41}
          height={10}
          alt="171x180"
          src="https://cdn.pixabay.com/photo/2014/12/21/23/53/broccoli-576271__340.png"
        />
        <Figure.Caption>Grocery</Figure.Caption>
      </Figure>

      <Figure style={{ padding: '20px', margin: '5px' }}>
        <Figure.Image
          width={41}
          height={10}
          alt="171x180"
          src="https://media.istockphoto.com/id/477407394/photo/samsung-s6-edge-black-sapphire-with-clipping-path.jpg?s=612x612&w=0&k=20&c=NITXRbXr_lqTQZSsFNXZK8M-V_KxJUjD27u6Nbhxr1o="
        />
        <Figure.Caption>Mobiles</Figure.Caption>
      </Figure>

      <Figure style={{ padding: '20px', margin: '5px' }}>
        <Figure.Image
          width={41}
          height={10}
          alt="171x180"
          src="https://cdn.pixabay.com/photo/2014/04/03/10/21/coat-310158__340.png"
        />
        <Figure.Caption>Fashion</Figure.Caption>
      </Figure>

      <Figure style={{ padding: '20px', margin: '5px' }}>
        <Figure.Image
          width={41}
          height={10}
          alt="171x180"
          src="https://cdn.pixabay.com/photo/2013/07/12/14/19/television-148223__340.png"
        />
        <Figure.Caption>Electronics</Figure.Caption>
      </Figure>

      <Figure style={{ padding: '20px', margin: '5px' }}>
        <Figure.Image
          width={41}
          height={10}
          alt="171x180"
          src="https://cdn.pixabay.com/photo/2014/12/21/23/39/armchair-575788__340.png"
        />
        <Figure.Caption>Home</Figure.Caption>
      </Figure>

      <Figure style={{ padding: '20px', margin: '5px' }}>
        <Figure.Image
          width={41}
          height={10}
          alt="171x180"
          src="https://cdn.pixabay.com/photo/2013/07/13/11/46/refrigerator-158634__340.png"
        />
        <Figure.Caption>Appliances</Figure.Caption>
      </Figure>

      <Figure style={{ padding: '20px', margin: '5px' }}>
        <Figure.Image
          width={41}
          height={10}
          alt="171x180"
          src="https://cdn.pixabay.com/photo/2013/07/13/13/35/airplane-161163__340.png"
        />
        <Figure.Caption>Travel</Figure.Caption>
      </Figure>

      <Figure style={{ padding: '20px', margin: '5px' }}>
        <Figure.Image
          width={41}
          height={10}
          alt="171x180"
          src="https://cdn.pixabay.com/photo/2014/03/24/13/42/teddy-294066__340.png"
        />
        <Figure.Caption>Beauty,Toys&More</Figure.Caption>
      </Figure>

      <Figure style={{ padding: '20px', margin: '5px' }}>
        <Figure.Image
          width={41}
          height={10}
          alt="171x180"
          src="https://cdn.pixabay.com/photo/2013/07/13/01/11/passenger-car-155267__340.png"
        />
        <Figure.Caption>Vehicles</Figure.Caption>
      </Figure>
    </div>
  );
}
