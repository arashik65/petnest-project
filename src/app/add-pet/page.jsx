
"use client";
import {
  Button,
  Card,
  FieldError,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
const AddPetListingPage = () => {
    const onSubmit =async(e)=>{
    e.preventDefault()
    const formData=new FormData(e.currentTarget)
    const addpet= Object.fromEntries(formData.entries())
    console.log(addpet);

    //add petcollection data api call kora hosse
    const res =await fetch('http://localhost:5001/addpet',{
      method:'POST',
      headers:{
        'content-type':'application/json'
        
      },
      body:JSON.stringify(addpet)
    })
    const data = await res.json()
    console.log(data);

}
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Add a <span className="text-orange-500">Pet Listing</span>
          </h1>
          <p className="text-default-500 mt-2">
            Help a pet find their forever home by creating a detailed listing.
          </p>
        </div>

        {/* Form Card */}
        <Card className="rounded-2xl shadow-xl border border-default-200">
          <form onSubmit={onSubmit} className="p-4 md:p-8 space-y-6">
            {/* Form Heading */}
            <div>
              <h2 className="text-xl font-semibold">
                Pet Information
              </h2>
              <p className="text-sm text-default-500 mt-1">
                Provide accurate information about the pet.
              </p>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Pet Name */}
              <TextField name="petName" isRequired>
                <Label>Pet Name</Label>
                <Input
                  placeholder="e.g. Max"
                  className="rounded-xl"
                />
                <FieldError />
              </TextField>

              {/* Species */}
              <Select
                name="species"
                isRequired
                placeholder="Choose a pet type"
              >
                <Label>Species</Label>
                <Select.Trigger className="rounded-xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Dog">
                      Dog
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Cat">
                      Cat
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Rabbit">
                      Rabbit
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Bird">
                      Bird
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Other">
                      Other
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
              {/* Breed */}
              <TextField name="breed" isRequired>
                <Label>Breed</Label>
                <Input
                  placeholder="e.g. Golden Retriever"
                  className="rounded-xl"
                />
                <FieldError />
              </TextField>
              {/* Age */}
              <TextField name="age" type="number" isRequired>
                <Label>Age (years)</Label>
                <Input
                  type="number"
                  placeholder="e.g. 3"
                  className="rounded-xl"
                />
                <FieldError />
              </TextField>
              {/* Gender */}
              <Select
                name="gender"
                isRequired
                placeholder="Choose gender"
              >
                <Label>Gender</Label>
                <Select.Trigger className="rounded-xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Male">
                      Male
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Female">
                      Female
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
              {/* Vaccination Status */}
              <Select
                name="vaccinationStatus"
                isRequired
                placeholder="Choose vaccination status"
              >
                <Label>Vaccination Status</Label>
                <Select.Trigger className="rounded-xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Vaccinated">
                      Vaccinated
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Partially Vaccinated">
                      Partially Vaccinated
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Not Vaccinated">
                      Not Vaccinated
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Unknown">
                      Unknown
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
              {/* Pet Image URL */}
              <div className="md:col-span-2">
                <TextField name="image" isRequired>
                  <Label>Pet Image URL</Label>
                  <p className="text-xs text-default-400 mb-1">
                    (Add a direct image link from ImgBB)
                  </p>
                  <Input
                    type="url"
                    placeholder="e.g. https://i.ibb.co/example/pet.jpg"
                    className="rounded-xl"
                  />
                  <FieldError />
                </TextField>
              </div>
              {/* Health Status */}
              <Select
                name="healthStatus"
                isRequired
                placeholder="Choose current health condition"
              >
                <Label>Health Status</Label>
                <Select.Trigger className="rounded-xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Healthy">
                      Healthy
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Needs Medical Attention">
                      Needs Medical Attention
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Under Treatment">
                      Under Treatment
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Unknown">
                      Unknown
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
              {/* Location */}
              <TextField name="location" isRequired>
                <Label>Location</Label>
                <Input
                  placeholder="e.g. Dhaka, Bangladesh"
                  className="rounded-xl"
                />
                <FieldError />
              </TextField>
              {/* Adoption Fee */}
              <div className="md:col-span-2">
                <TextField name="adoptionFee" type="number">
                  <Label>
                    Adoption Fee ($) — Enter 0 for free
                  </Label>
                  <Input
                    type="number"
                    placeholder="e.g. 25"
                    className="rounded-xl"
                  />
                  <FieldError />
                </TextField>
              </div>
              {/* Owner Email */}
              <div className="md:col-span-2">
                <TextField name="ownerEmail" isRequired>
                  <Label>Owner Email</Label>
                  <Input
                    type="email"
                    placeholder="e.g. petowner@example.com"
                    className="rounded-xl"
                  />
                  <FieldError />
                </TextField>
              </div>
              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Share details about the pet's nature, favorite activities, daily routine, and special care requirements..."
                    className="rounded-2xl"
                    rows={4}
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
              <Button
                type="button"
                variant="bordered"
                className="w-full sm:w-1/2 h-11 rounded-xl bg-white border border-default-200 text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-full sm:w-1/2 h-11 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600"
              >
                Add Pet Listing
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};
export default AddPetListingPage;
