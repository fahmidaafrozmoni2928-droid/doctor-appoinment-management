

export default function Card({detail}) {
    const {image, name, speciality, description, fee } = detail;
    return(
        <div className="">
<div className="card bg-base-100 w-full h-full shadow-sm">
  <figure>
    <img
      src= {image} className="w-full h-80 object-cover"
      alt="doctor" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <h2>Speciality: {speciality}</h2>
    <p>{description}</p>
    <p>Fee: {fee}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full">View Details</button>
    </div>
  </div>
</div>
        </div>

    )
}