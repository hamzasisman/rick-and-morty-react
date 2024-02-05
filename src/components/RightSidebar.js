import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePrice } from '../store/ProductSlice';
import { Add } from '../assets/img';
import Modal from './Modal';
import { formatPrice } from './utility';

const RightSidebar = () => {

  const price = useSelector(state => state.productStore.price);
  const dispatch = useDispatch();

  const [chart, setChart] = useState(JSON.parse(localStorage.getItem('chart')));
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleAddToChart = (item) => {
    setChart([...chart, item]);
  };

  const handleRemoveFromChart = (item) => {
    // Çıkarılacak ürünün index'ini buluyoruz.
    const indexToRemove = chart.findIndex((product) => product.id === item.id);

    if (indexToRemove !== -1) {
      // Index varsa, belirtilen product'u array'den çıkarıyoruz.
      const updatedChart = [...chart.slice(0, indexToRemove), ...chart.slice(indexToRemove + 1)];
      setChart(updatedChart);
    }
  };

  useEffect(() => {
    localStorage.setItem('chart', JSON.stringify(chart))

    let tmpTotalPrice = 0;
    chart && chart.length > 0 && (
      chart.map((item) => tmpTotalPrice = tmpTotalPrice + parseInt(item.price))
    )

    dispatch(changePrice(tmpTotalPrice))

  }, [chart])

  return (
    <div className='w-full flex flex-col gap-5'>
      <div className='shadow-content bg-white py-5 px-3 w-full flex flex-col gap-3'>
        {
          chart.map((item, index, array) => {

            const printedIds = [];

            //Daha önce ekrana yazdırılan tüm product'ların id'lerini bir array'e atıyoruz.
            for (let i = index - 1; i >= 0; i--) {
              printedIds.push(array[i].id);
            }

            //Eğer oluşturduğumuz arra'in içindeki id ile eşleşiyorsa null döndürüyoruz
            //Böylece her product'u sadece bir kez ekrana yazdırmış oluyoruz.
            if (printedIds.includes(item.id)) {
              return null;
            }

            const count = array.filter(obj => obj.id === item.id).length;
            return (
              <div key={index} className='flex justify-between items-center'>
                <div>
                  <p>{item.name}</p>
                  <p className='text-primary font-bold'>{formatPrice(item.price * count)}</p>
                </div>
                <div className='flex'>
                  <button
                    className='w-5 h-5 bg-card flex items-center justify-center hover:bg-gray-200 focus:bg-gray-200 rounded-l'
                    onClick={() => handleRemoveFromChart(item)}
                  >-</button>
                  <div className='w-5 h-5 bg-primary flex items-center justify-center text-white'>{count}</div>
                  <button
                    className='w-5 h-5 bg-card flex items-center justify-center hover:bg-gray-200 focus:bg-gray-200 rounded-r'
                    onClick={() => handleAddToChart(item)}
                  >+</button>
                </div>
              </div>
            );
          })
        }
        {
          chart.length === 0 && (
            <div className='flex flex-col items-center gap-1'>
              <img className='w-8 h-8' src={Add}></img>
              <p className='text-center'>Add items to cart to list products</p>
            </div>
          )
        }
      </div>

      <div className='shadow-content bg-white py-5 px-3 w-full flex flex-col gap-3'>
        <p className='font-bold'>
          <span>Total Price: </span>
          <span className='text-primary'>{formatPrice(price)}</span>
        </p>
        <button
          className='bg-primary rounded-[10px] h-[40px] text-white text-center hover:opacity-80 focus:opacity-80'
          type='button'
          onClick={() => { setModal(true); setModalContent({ element: "error" }) }}
        >
          Checkout
        </button>
      </div>

      {(Object.keys(modalContent).length !== 0 && (
        <Modal
          modal={modal}
          setModal={setModal}
          classes={{ modal: 'h-[220px] max-w-[500px]' }}
        >
          {modalContent.element === "error" &&
            <>
              <p className='font-bold text-[18px] mb-5'>Inform Message</p>
              <p>What will be done when this button is clicked is not specified in the details of the project.</p>
            </>
          }
        </Modal>
      ))}

    </div>
  )
}

export default RightSidebar