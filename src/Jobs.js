import Job from "./Job";

const Jobs = (props) => {
  return (
    <div className="container">
      <Job
        className={props.className}
        title={props.title[0]}
        contractType={props.contractType[0]}
        country={props.country[0]}
        city={props.city[0]}
      />
      <Job
        className={props.className}
        title={props.title[1]}
        contractType={props.contractType[1]}
        country={props.country[1]}
        city={props.city[1]}
      />
      <Job
        className={props.className}
        title={props.title[2]}
        contractType={props.contractType[2]}
        country={props.country[2]}
        city={props.city[2]}
      />
      <Job
        className={props.className}
        title={props.title[3]}
        contractType={props.contractType[3]}
        country={props.country[3]}
        city={props.city[3]}
      />
      <Job
        className={props.className}
        title={props.title[4]}
        contractType={props.contractType[4]}
        country={props.country[4]}
        city={props.city[4]}
      />
      <Job
        className={props.className}
        title={props.title[5]}
        contractType={props.contractType[5]}
        country={props.country[5]}
        city={props.city[5]}
      />
      <Job
        className={props.className}
        title={props.title[6]}
        contractType={props.contractType[6]}
        country={props.country[6]}
        city={props.city[6]}
      />
      <Job
        className={props.className}
        title={props.title[7]}
        contractType={props.contractType[7]}
        country={props.country[7]}
        city={props.city[7]}
      />
      <Job
        className={props.className}
        title={props.title[8]}
        contractType={props.contractType[8]}
        country={props.country[8]}
        city={props.city[8]}
      />
    </div>
  );
};

export default Jobs;
