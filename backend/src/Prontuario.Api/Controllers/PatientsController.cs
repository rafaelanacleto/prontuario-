using MediatR;
using Microsoft.AspNetCore.Mvc;
using Prontuario.Application.Patients;

namespace Prontuario.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class PatientsController : ControllerBase
{
    private readonly IMediator _mediator;

    public PatientsController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var patients = await _mediator.Send(new GetAllPatientsQuery());
        return Ok(patients);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
        var patient = await _mediator.Send(new GetPatientByIdQuery { Id = id });
        return patient is not null ? Ok(patient) : NotFound();
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreatePatientCommand command)
    {
        var patient = await _mediator.Send(command);
        return CreatedAtAction(nameof(GetById), new { id = patient.Id }, patient);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, [FromBody] UpdatePatientCommand command)
    {
        if (id != command.Id)
        {
            return BadRequest("The route id must match the payload id.");
        }

        var updated = await _mediator.Send(command);
        return updated is not null ? Ok(updated) : NotFound();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _mediator.Send(new DeletePatientCommand { Id = id });
        return NoContent();
    }
}
