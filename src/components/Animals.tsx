import './Animals.css'

export default function Animals() {
  return (
    <>
      <div id='animalPage'>
        <div id='leftSideAnimals'>
          <div id='filters'>
            <div id='dogFilter'>
              <input type="checkbox" name='animalType1' id='dogCheckbox' value={'Dog'} />
              <label htmlFor="dogCheckbox">Dogs</label>
            </div>
            <div id='catFilter'>
              <input type="checkbox" name='animalType2' id='catCheckbox' value={'Cat'} />
              <label htmlFor="catCheckbox">Cats</label>
            </div>
            <div id='otherFiler'>
              <input type="checkbox" name='animalType3' id='otherCheckbox' value={'Other'} />
              <label htmlFor="otherCheckbox">Other</label>
            </div>
          </div>
        </div>
        <div id='rightSideAnimals'>
          text
        </div>
      </div>
    </>
  )
}
