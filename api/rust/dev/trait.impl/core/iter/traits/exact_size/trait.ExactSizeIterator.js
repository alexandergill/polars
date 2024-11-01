(function() {
    var implementors = Object.fromEntries([["polars_core",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::exact_size::ExactSizeIterator\">ExactSizeIterator</a> for <a class=\"struct\" href=\"polars_core/chunked_array/iterator/struct.BoolIterNoNull.html\" title=\"struct polars_core::chunked_array::iterator::BoolIterNoNull\">BoolIterNoNull</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::exact_size::ExactSizeIterator\">ExactSizeIterator</a> for <a class=\"struct\" href=\"polars_core/datatypes/categorical/struct.CatIter.html\" title=\"struct polars_core::datatypes::categorical::CatIter\">CatIter</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::exact_size::ExactSizeIterator\">ExactSizeIterator</a> for <a class=\"struct\" href=\"polars_core/series/struct.SeriesIter.html\" title=\"struct polars_core::series::SeriesIter\">SeriesIter</a>&lt;'_&gt;"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::exact_size::ExactSizeIterator\">ExactSizeIterator</a> for <a class=\"struct\" href=\"polars_core/chunked_array/iterator/struct.SomeIterator.html\" title=\"struct polars_core::chunked_array::iterator::SomeIterator\">SomeIterator</a>&lt;I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::exact_size::ExactSizeIterator\">ExactSizeIterator</a>,</div>"]]],["polars_utils",[["impl&lt;I, IdxType&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::exact_size::ExactSizeIterator\">ExactSizeIterator</a> for <a class=\"struct\" href=\"polars_utils/itertools/enumerate_idx/struct.EnumerateIdx.html\" title=\"struct polars_utils::itertools::enumerate_idx::EnumerateIdx\">EnumerateIdx</a>&lt;I, IdxType&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::exact_size::ExactSizeIterator\">ExactSizeIterator</a>,\n    IdxType: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;Output = IdxType&gt; + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.FromPrimitive.html\" title=\"trait num_traits::cast::FromPrimitive\">FromPrimitive</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/identities/trait.One.html\" title=\"trait num_traits::identities::One\">One</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/exact_size/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::exact_size::ExactSizeIterator\">ExactSizeIterator</a> for <a class=\"struct\" href=\"polars_utils/chunks/struct.Chunks.html\" title=\"struct polars_utils::chunks::Chunks\">Chunks</a>&lt;'_, T&gt;"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[1839,1857]}