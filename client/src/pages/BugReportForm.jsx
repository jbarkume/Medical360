import FormField from "../components/FormField";

const BugReport = () => {
    const fields = [
        { name: 'Contact Name', initialValue: '', editable: true },
        { name: 'Street', initialValue: '', editable: true },
        { name: 'City', initialValue: '', editable: true },
        { name: 'Zipcode', initialValue: '', editable: true },
        { name: 'Phone', initialValue: '', editable: true },
        { name: 'Email', initialValue: '', editable: true },
        { name: 'Bug encountered', initialValue: '', editable: true }
      ];

    function handleSubmit(){
        alert("test")
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-4 text-cyan-400">Bug Report</h1>
        <FormField fields={fields} submit={handleSubmit} buttonName={"submit"}></FormField>
        </div>
        )
}
export default BugReport;