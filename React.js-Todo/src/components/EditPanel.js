import React from 'react'
import EditForm from './EditForm'
import Button from './Button'

const EditPanel = ({sendEditedTask , cancelEdit , id}) => {

  return (
    <section className='backdrop-blur-xl fixed inset-0  w-screen h-screen flex items-center justify-center'>

      <Button CName={'fixed w-[30px] h-[30px] top-8 right-8'} onclick={() => cancelEdit(id)}>
        <div className='w-[25px] fixed border-2  rounded-lg border-black rotate-[45deg]'></div>
        <div className='w-[25px] fixed border-2 rounded-lg border-black rotate-[-45deg]'></div>
      </Button>

      <div className='text-center w-3/4 h-1/4'>
        <EditForm id={id} sendEditedTask={sendEditedTask} />
      </div>
    </section>
  )
}

export default EditPanel
