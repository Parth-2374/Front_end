import React from 'react'

function IndexForm() {
  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-slate-900 p-8 text-center">
            <h2 className="text-2xl font-bold text-white tracking-wide">Send an Inquiry</h2>
          </div>
          <form onSubmit={handleSubmit} className="p-8 grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="^\+?\d{10,15}$"
              className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="inquiry"
              placeholder="Your Inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              required
              rows={5}
              className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Submit
            </button>
            {status && <p className="mt-2 text-slate-700">{status}</p>}
          </form>
        </div>
    </div>
  )
}

export default IndexForm
