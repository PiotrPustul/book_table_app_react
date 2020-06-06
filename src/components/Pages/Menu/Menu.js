import React from 'react';
import './_Menu.scss';

const Menu = () => {
  return (
    <div className="menu__page">
      <div className="container__menu">
        <div className="left__side">
          <div className="box__a">
            <h3>Starters</h3>
            <div>
              <p>Seasonal soup</p>
              <span>£6.50</span>
            </div>
            <div>
              <p>Potted mackerel, pickles, toast</p>
              <span>£7.50</span>
            </div>
            <div>
              <p>Lemon & pepper smoked salmon, caper berries, pickled shallots</p>
              <span>£8.50</span>
            </div>
            <div>
              <p>Chicken liver parfait, red onion chutney, toast</p>
              <span>£8.50</span>
            </div>
            <div>
              <p>Squash, kale, watermelon radish, chickpeas & quinoa salad <span style={{ color: "green", fontWeight: "bold" }}>(vg)</span></p>
              <span>£7.00</span>
            </div>
          </div>
          <div className="box__c">
            <h3>Sides</h3>
            <div>
              <p>Truffle mac 'n' cheese</p>
              <span>£4.50</span>
            </div>
            <div>
              <p>Skinny fries / Triple cooked chips</p>
              <span>£4.50</span>
            </div>
            <div>
              <p>Sweet potato chips</p>
              <span>£5.00</span>
            </div>
            <div>
              <p>Spiced king cabbage, pomegranate & pistachios</p>
              <span>£5.50</span>
            </div>
            <div>
              <p>Purple tenderstem broccoli, chilli & garlic butter</p>
              <span>£5.50</span>
            </div>
          </div>
        </div>
        <div className="right__side">
          <div className="box__b">
            <h3>Mains</h3>
            <div>
              <p>Billinsgate fishcake, broad beans, peas, samphire, crab mayo</p>
              <span>£15.50</span>
            </div>
            <div>
              <p>Burger, cheese, ale onions, lettuce, ketchup, mayo, pickles, fries</p>
              <span>£15.75</span>
            </div>
            <div>
              <p>Apple 7 garlic sausages, creamy spring onion mash, gravy</p>
              <span>£15.50</span>
            </div>
            <div>
              <p>Beer-battered cod, triple cooked chips, mushy peas, tartare sauce</p>
              <span>£16.00</span>
            </div>
            <div>
              <p>21 day aged 14oz cote de boeuf steak, fries, salad, peppercorn sauce</p>
              <span>£30.00</span>
            </div>
            <div>
              <p>'Sherperd-less' pie, sweet potato mash top, tenderstem broccoli <span style={{ color: "green", fontWeight: "bold" }}>(vg)</span></p>
              <span>£17.50</span>
            </div>
            <div>
              <p>Yorkshire blue & leek mac'n'cheese, sundried tomato salad <span style={{ color: "green", fontWeight: "bold" }}>(v)</span></p>
              <span>£12.50</span>
            </div>
          </div>
          <div className="box__d">
            <h3>Puddings</h3>
            <div>
              <p>Apple, fig & chestnut crumble, custard</p>
              <span>£6.50</span>
            </div>
            <div>
              <p>Sticky figgy pudding, vanilla ice cream</p>
              <span>£7.50</span>
            </div>
            <div>
              <p>Flourless chocolate brownie, vegan vanilla ice cream</p>
              <span>£7.50</span>
            </div>
          </div>
        </div>



      </div>
    </div >
  );
}

export default Menu;